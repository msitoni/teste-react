let failedLoadAttempts = 2;

class RepoService {
    static load() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (failedLoadAttempts > 1) {
            
            fetch("https://api.github.com/repositories")
                .then(res => res.json())
                .then(
                    (result) => {
                        const repos = result;
                        resolve(repos ? repos : []); 
                        console.log(repos);                       
                    },                
                    (error) => {
                       
                    }
                )            
          } else {
            reject();
            failedLoadAttempts++;
          }
        }, 2000);
      });
    }
}

export default RepoService;


