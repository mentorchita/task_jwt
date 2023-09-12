echo "Test structure"
DIR=("controllers" "config" "models" "routes")
for d in ${DIR[@]};
    do 
    if [ -d $d ]
    then
      echo "Directory $d exists"
    else
      echo "Error: Directory $d does not exists"
      exit 1
fi
done

if [ -f ./controllers/productController.js ] 
then
      echo "Product Controller file exists"
    else
      echo "Error: Product Controller file  does not exists"
      exit 1
fi

if [ -f ./controllers/Users.js ] 
then
      echo "Users Controller file exists"
    else
      echo "Error: Users Controller file  does not exists"
      exit 1
fi

if [ -f ./config/Database.js ] 
then
      echo "Database config file exists"
    else
      echo "Error: Database config file /config/Database.js does not exists"
      exit 1
fi

if grep -R "sequelize" ./config/Database.js
then
     echo "code sequelize  found"
else
    echo "code sequelize does not found"
    exit 1
fi

if grep -R "jsonwebtoken" package.json >/dev/null
then
     echo "library jsonwebtoken  found in package.json"
else
    echo "library jsonwebtoken does not found in package.json"
    exit 1
fi

if grep -R "bcrypt" package.json >/dev/null
then
     echo "library bcrypt  found in package.json"
else
    echo "library bcrypt does not found in package.json"
    exit 1
fi