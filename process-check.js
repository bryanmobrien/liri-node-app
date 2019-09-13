const envVars = [
    'TERM',
    'SHELL',
    'USER',
    'PATH',
    'PWD',
    'EDITOR',
    'HOME',
    'LOGNAME',
 //   '_:'
];
for (let i = 0; i < envVars.length; i++ ) {
    console.log(process.env.envVars[i]);
    //console.log(process.env.envVars[i]);
};
