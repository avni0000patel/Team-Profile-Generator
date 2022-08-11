class Generator {
    managerGenerator = (data) => {
        return `    
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header employee">
                        <h2>${data.name}</h2>
                        <h3>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item border">Id: ${data.id}</li>
                            <li class="list-group-item border">Email: <a href="mailto: ${data.email}">${data.email}</a></li>
                            <li class="list-group-item border">Office Number: ${data.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    engineerGenerator = (data) => {
        return `    
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header employee">
                        <h2>${data.name}</h2>
                        <h3>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item border">Id: ${data.id}</li>
                            <li class="list-group-item border">Email: <a href="mailto: ${data.email}">${data.email}</a></li>
                            <li class="list-group-item border">GitHub: <a href="https://github.com/${data.github}">${data.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    internGenerator = (data) => {
        return `    
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header employee">
                        <h2>${data.name}</h2>
                        <h3>Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item border">Id: ${data.id}</li>
                            <li class="list-group-item border">Email: <a href="mailto: ${data.email}">${data.email}</a></li>
                            <li class="list-group-item border">School: ${data.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
}

module.exports = Generator;