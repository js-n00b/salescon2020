self.Storage = {};
self.Storage.CurrentJob = null;
self.Storage.JobList = [];

self.addEventListener('message', function(e) 
{		
	var i;

	switch(e.data.cmd)
	{
		case "load":
			self.Storage.JobList.push(e.data.data);
			if(self.Storage.JobList.length > 0)
			{
				if(self.Storage.CurrentJob != null)
					return;
					
				self.Storage.CurrentJob = self.Storage.JobList[0].Id;
				self.postMessage({"cmd" : e.data.cmd, "data": self.Storage.JobList[0]});									
			}
			break;
			
		case "done":
			if(self.Storage.JobList.length > 0)
			{
				if(self.Storage.CurrentJob == null)
					return;
				
				if(self.Storage.JobList[0].Id == e.data.data)	
					self.Storage.JobList.shift();
				
				self.Storage.CurrentJob = null;	
				self.postMessage({"cmd" : e.data.cmd});	
			}
			break;
			
		case "next":
			if(self.Storage.CurrentJob == null)
			{
				if(self.Storage.JobList.length > 0)
				{
					self.Storage.CurrentJob = self.Storage.JobList[0].Id;
					self.postMessage({"cmd" : "load", "data": self.Storage.JobList[0]});
				}
				else
				{
					self.postMessage({"cmd" : "empty"});
					self.Storage.CurrentJob = null;
				}
			}
			break;
	}
	
}, false);

	