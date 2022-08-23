#!/bin/bash

echo "creating component ${1}"
mkdir -p "./src/components/${1}"
touch "./src/components/${1}/${1}.tsx" 
touch "./src/components/${1}/${1}.module.css" 
touch "./src/components/${1}/${1}.test.tsx"
echo "import React from 'react';" >> "./src/components/${1}/${1}.test.tsx"
echo "import React from 'react';" >> "./src/components/${1}/${1}.tsx"
echo "import ${1} from './${1}.module.css';" >> "./src/components/${1}/${1}.tsx"
echo "const ${1^}: React.FC = ():JSX.Element => {" >> "./src/components/${1}/${1}.tsx"
echo "return (" >> "./src/components/${1}/${1}.tsx"
echo "<>" >> "./src/components/${1}/${1}.tsx"
echo "<h1>Hello from ${1^} component </h1>" >> "./src/components/${1}/${1}.tsx"
echo "</>" >> "./src/components/${1}/${1}.tsx"
echo ")" >> "./src/components/${1}/${1}.tsx"
echo "}" >> "./src/components/${1}/${1}.tsx"
echo "export default ${1^};" >> "./src/components/${1}/${1}.tsx"
echo "component has been created"