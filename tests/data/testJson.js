    const testCases = [


        // FOR EACH LANGUGAE I ADDED   NEW 5 TESTCASES 

        //CPP

            {
                name: 'cpp : division by zero',
                reqObject: {
                    language: 'cpp',
                    script:
                        '#include<bits/stdc++.h>\n' +
                        'using namespace std;\n' +
                        'int main(){\n' +
                        '    int x = 1 / 0;\n' +
                        '    cout << x;\n' +
                        '    return 0;\n' +
                        '}\n',
                },
                expectedResponse: {
                    val: 'Floating point exception (core dumped)',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'cpp : syntax error',
                reqObject: {
                    language: 'cpp',
                    script:
                        '#include<bits/stdc++.h>\n' +
                        'using namespace std;\n' +
                        'int main(){\n' +
                        '    cout << "hello world"\n' + // Missing semicolon
                        '    return 0;\n' +
                        '}\n',
                },
                expectedResponse: {
                    val: 'Syntax error',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'cpp : runtime error',
                reqObject: {
                    language: 'cpp',
                    script:
                        '#include<bits/stdc++.h>\n' +
                        'using namespace std;\n' +
                        'int main(){\n' +
                        '    int arr[2];\n' +
                        '    arr[5] = 10;\n' +
                        '    cout << arr[5];\n' +
                        '    return 0;\n' +
                        '}\n',
                },
                expectedResponse: {
                    val: 'Segmentation fault (core dumped)',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'cpp : file not found error',
                reqObject: {
                    language: 'cpp',
                    script:
                        '#include<bits/stdc++.h>\n' +
                        'using namespace std;\n' +
                        'int main(){\n' +
                        '    ifstream infile("nonexistent_file.txt");\n' +
                        '    string content;\n' +
                        '    if (!infile.is_open()) {\n' +
                        '        content = "File not found";\n' +
                        '    }\n' +
                        '    cout << content;\n' +
                        '    return 0;\n' +
                        '}\n',
                },
                expectedResponse: {
                    val: 'File not found',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'cpp : memory limit exceeded',
                reqObject: {
                    language: 'cpp',
                    script:
                        '#include<bits/stdc++.h>\n' +
                        'using namespace std;\n' +
                        'int main(){\n' +
                        '    vector<int> v(1000000000);\n' + // Trying to allocate too much memory
                        '    cout << "memory allocation";\n' +
                        '    return 0;\n' +
                        '}\n',
                },
                expectedResponse: {
                    val: 'Memory limit exceeded',
                    status: 200,
                    error: 1,
                },
            },


            // PYTHON 

        
                {
                    name: 'python : division by zero',
                    reqObject: {
                        language: 'python',
                        script: 'x = 1 / 0\nprint(x)',
                    },
                    expectedResponse: {
                        val: 'ZeroDivisionError: division by zero',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'python : syntax error',
                    reqObject: {
                        language: 'python',
                        script: 'print("hello world")', // Missing closing parenthesis
                    },
                    expectedResponse: {
                        val: 'SyntaxError: unexpected EOF while parsing',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'python : runtime error',
                    reqObject: {
                        language: 'python',
                        script: 'print(a)', // 'a' is not defined
                    },
                    expectedResponse: {
                        val: 'NameError: name \'a\' is not defined',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'python : file not found error',
                    reqObject: {
                        language: 'python',
                        script:
                            'try:\n' +
                            '    with open("nonexistent_file.txt", "r") as file:\n' +
                            '        content = file.read()\n' +
                            '        print(content)\n' +
                            'except FileNotFoundError:\n' +
                            '    print("File not found")\n',
                    },
                    expectedResponse: {
                        val: 'File not found',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'python : memory limit exceeded',
                    reqObject: {
                        language: 'python',
                        script: 's = " " * 1000000000', // Trying to allocate too much memory
                    },
                    expectedResponse: {
                        val: 'MemoryError: out of memory',
                        status: 200,
                        error: 1,
                    },
                },

                //C

            
                        {
                        name: 'c : division by zero',
                        reqObject: {
                            language: 'c',
                            script:
                                '#include<stdio.h>\n\n' +
                                'int main(){\n\n' +
                                '    int x = 1 / 0;\n' +
                                '    printf("%d", x);\n' +
                                '    return 0;\n' +
                                '}\n',
                        },
                        expectedResponse: {
                            val: 'Floating point exception (core dumped)',
                            status: 200,
                            error: 1,
                        },
                    },
                    {
                        name: 'c : syntax error',
                        reqObject: {
                            language: 'c',
                            script:
                                '#include<stdio.h>\n\n' +
                                'int main(){\n\n' +
                                '    printf("hello world")\n' + // Missing semicolon
                                '    return 0;\n' +
                                '}\n',
                        },
                        expectedResponse: {
                            val: 'Syntax error',
                            status: 200,
                            error: 1,
                        },
                    },
                    {
                        name: 'c : runtime error',
                        reqObject: {
                            language: 'c',
                            script:
                                '#include<stdio.h>\n\n' +
                                'int main(){\n\n' +
                                '    int arr[2];\n' +
                                '    arr[5] = 10;\n' +
                                '    printf("%d", arr[5]);\n' +
                                '    return 0;\n' +
                                '}\n',
                        },
                        expectedResponse: {
                            val: 'Segmentation fault (core dumped)',
                            status: 200,
                            error: 1,
                        },
                    },
                    {
                        name: 'c : file not found error',
                        reqObject: {
                            language: 'c',
                            script:
                                '#include<stdio.h>\n\n' +
                                'int main(){\n\n' +
                                '    FILE *file = fopen("nonexistent_file.txt", "r");\n' +
                                '    if (!file) {\n' +
                                '        printf("File not found");\n' +
                                '    }\n' +
                                '    fclose(file);\n' +
                                '    return 0;\n' +
                                '}\n',
                        },
                        expectedResponse: {
                            val: 'File not found',
                            status: 200,
                            error: 1,
                        },
                    },
                    {
                        name: 'c : memory limit exceeded',
                        reqObject: {
                            language: 'c',
                            script:
                                '#include<stdlib.h>\n\n' +
                                'int main(){\n\n' +
                                '    int *p = (int *)malloc(1000000000 * sizeof(int));\n' + // Trying to allocate too much memory
                                '    free(p);\n' +
                                '    return 0;\n' +
                                '}\n',
                        },
                        expectedResponse: {
                            val: 'Memory limit exceeded',
                            status: 200,
                            error: 1,
                        },
                    },

            //JAVA


                {
                    name: 'java : division by zero',
                    reqObject: {
                        language: 'java',
                        script:
                            'public class Main {\n' +
                            '    public static void main(String[] args) {\n' +
                            '        int x = 1 / 0;\n' +
                            '        System.out.println(x);\n' +
                            '    }\n' +
                            '}\n',
                    },
                    expectedResponse: {
                        val: 'ArithmeticException: / by zero',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'java : syntax error',
                    reqObject: {
                        language: 'java',
                        script:
                            'public class Main {\n' +
                            '    public static void main(String[] args) {\n' +
                            '        System.out.println("hello world");\n' +
                            '    }\n' +
                            '}\n' +
                            'Missing semicolon here', // Syntax error intentionally added
                    },
                    expectedResponse: {
                        val: 'Syntax error',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'java : runtime error',
                    reqObject: {
                        language: 'java',
                        script:
                            'public class Main {\n' +
                            '    public static void main(String[] args) {\n' +
                            '        int[] arr = new int[2];\n' +
                            '        arr[5] = 10;\n' +
                            '        System.out.println(arr[5]);\n' +
                            '    }\n' +
                            '}\n',
                    },
                    expectedResponse: {
                        val: 'ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 2',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'java : file not found error',
                    reqObject: {
                        language: 'java',
                        script:
                            'import java.io.File;\n' +
                            'import java.io.FileNotFoundException;\n' +
                            'import java.util.Scanner;\n' +
                            'public class Main {\n' +
                            '    public static void main(String[] args) {\n' +
                            '        try {\n' +
                            '            File file = new File("nonexistent_file.txt");\n' +
                            '            Scanner scanner = new Scanner(file);\n' +
                            '            while (scanner.hasNextLine()) {\n' +
                            '                System.out.println(scanner.nextLine());\n' +
                            '            }\n' +
                            '            scanner.close();\n' +
                            '        } catch (FileNotFoundException e) {\n' +
                            '            System.out.println("File not found");\n' +
                            '        }\n' +
                            '    }\n' +
                            '}\n',
                    },
                    expectedResponse: {
                        val: 'File not found',
                        status: 200,
                        error: 1,
                    },
                },
                {
                    name: 'java : memory limit exceeded',
                    reqObject: {
                        language: 'java',
                        script:
                            'import java.util.ArrayList;\n' +
                            'import java.util.List;\n' +
                            'public class Main {\n' +
                            '    public static void main(String[] args) {\n' +
                            '        List<byte[]> list = new ArrayList<>();\n' +
                            '        while (true) {\n' +
                            '            list.add(new byte[1000000]); // Attempting to allocate too much memory\n' +
                            '        }\n' +
                            '    }\n' +
                            '}\n',
                    },
                    expectedResponse: {
                        val: 'java.lang.OutOfMemoryError: Java heap space',
                        status: 200,
                        error: 1,
                    },
                },
            
        //NODEJS

        
            {
                name: 'nodejs : division by zero',
                reqObject: {
                    language: 'nodejs',
                    script:
                        'let x = 1 / 0;\n' +
                        'console.log(x);\n',
                },
                expectedResponse: {
                    val: 'Infinity',
                    status: 200,
                    error: 0,
                },
            },
            {
                name: 'nodejs : syntax error',
                reqObject: {
                    language: 'nodejs',
                    script: 'console.log("hello world")', // Missing semicolon
                },
                expectedResponse: {
                    val: 'SyntaxError: Unexpected string',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'nodejs : runtime error',
                reqObject: {
                    language: 'nodejs',
                    script: 'console.log(a);', // 'a' is not defined
                },
                expectedResponse: {
                    val: 'ReferenceError: a is not defined',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'nodejs : file not found error',
                reqObject: {
                    language: 'nodejs',
                    script:
                        'const fs = require("fs");\n' +
                        'fs.readFile("nonexistent_file.txt", (err, data) => {\n' +
                        '    if (err) {\n' +
                        '        console.log("File not found");\n' +
                        '    } else {\n' +
                        '        console.log(data.toString());\n' +
                        '    }\n' +
                        '});\n',
                },
                expectedResponse: {
                    val: 'File not found',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'nodejs : memory limit exceeded',
                reqObject: {
                    language: 'nodejs',
                    script:
                        'let arr = [];\n' +
                        'while (true) {\n' +
                        '    arr.push(" ".repeat(1000000)); // Attempting to allocate too much memory\n' +
                        '}\n',
                },
                expectedResponse: {
                    val: 'RangeError: Allocation failed - JavaScript heap out of memory',
                    status: 200,
                    error: 1,
                },
            },
        

        //RUBY 


            {
                name: 'ruby : division by zero',
                reqObject: {
                    language: 'ruby',
                    script: 'x = 1 / 0\nputs x',
                },
                expectedResponse: {
                    val: 'ZeroDivisionError: divided by 0',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'ruby : syntax error',
                reqObject: {
                    language: 'ruby',
                    script: 'puts "hello world"', // Missing closing quotation mark
                },
                expectedResponse: {
                    val: 'SyntaxError: unexpected end-of-input, expecting \')\'',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'ruby : runtime error',
                reqObject: {
                    language: 'ruby',
                    script: 'puts a', // 'a' is not defined
                },
                expectedResponse: {
                    val: 'NameError: undefined local variable or method \'a\' for main:Object',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'ruby : file not found error',
                reqObject: {
                    language: 'ruby',
                    script:
                        'begin\n' +
                        '    File.open("nonexistent_file.txt", "r") do |file|\n' +
                        '        content = file.read\n' +
                        '        puts content\n' +
                        '    end\n' +
                        'rescue Errno::ENOENT\n' +
                        '    puts "File not found"\n' +
                        'end\n',
                },
                expectedResponse: {
                    val: 'File not found',
                    status: 200,
                    error: 1,
                },
            },
            {
                name: 'ruby : memory limit exceeded',
                reqObject: {
                    language: 'ruby',
                    script: 'arr = []\nwhile true\n  arr << " " * 1000000\nend\n', // Attempting to allocate too much memory
                },
                expectedResponse: {
                    val: 'SystemStackError: stack level too deep',
                    status: 200,
                    error: 1,
                },
            },

        
            //THESE ARE OLD TESTCASES
            

        {
            name: 'cpp : hello world',
            reqObject: {
                language: 'cpp',
                script:
                    '#include<bits/stdc++.h>\n' +
                    'using namespace std;\n' +
                    'int main(){\n' +
                    '    cout << "hello world";\n' +
                    'return 0;\n' +
                    '}\n',
            },
            expectedResponse: {
                val: 'hello world',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'cpp : print stdin',
            reqObject: {
                language: 'cpp',
                script:
                    '#include<bits/stdc++.h>\n\n' +
                    'using namespace std;\n' +
                    'int main(){\n\n' +
                    '    int a;\n' +
                    '    while(cin >> a){\n' +
                    '        cout << a << endl;\n' +
                    '    }\n' +
                    '    return 0;\n\n' +
                    '}\n',
                stdin: '1 2 3',
            },
            expectedResponse: {
                val: '1\n2\n3\n',
                status: 200,
                error: 0,
            },

        },
        {
            name: 'nodejs : hello world',
            reqObject: {
                language: 'nodejs',
                script: 'console.log(\'hello world\')',
            },
            expectedResponse: {
                val: 'hello world\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'nodejs : print stdin',
            reqObject: {
                language: 'nodejs',
                script:
                    'process.stdin.setEncoding(\'utf8\'); \n ' +
                    'process.stdin.on(\'data\', (input) => { \n ' +
                    '  console.log(input); \n ' +
                    ' \n ' +
                    '}); \n ',
                stdin: '1 2 3',
            },
            expectedResponse: {
                val: '1 2 3\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'python : hello world',
            reqObject: {
                language: 'python',
                script: 'print(\'hello world\')',
            },
            expectedResponse: {
                val: 'hello world\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'python : print stdin',
            reqObject: {
                language: 'python',
                script:
                    'try:\n' +
                    '    while(True):\n' +
                    '        line = input()\n' +
                    '        if not line:\n' +
                    '            break\n' +
                    '        print(line)\n' +
                    'except EOFError:\n' +
                    '    pass',
                stdin: '1 2 3',
            },
            expectedResponse: {
                val: '1 2 3\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'c : hello world',
            reqObject: {
                language: 'c',
                script:
                    '#include<stdio.h>\n\n' +
                    'int main(){\n\n' +
                    '    printf("hello world");\n' +
                    '    return 0;\n' +
                    '}\n',
            },
            expectedResponse: {
                val: 'hello world',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'c : print stdin',
            reqObject: {
                language: 'c',
                script:
                    '#include <stdio.h>\n' +
                    'int main() {\n' +
                    '    int number;\n' +
                    '    while (scanf("%d", &number) == 1) {\n' +
                    '        printf("%d\\n", number);\n' +
                    '    } \n' +
                    '    return 0;\n' +
                    '}',
                stdin: '1 2 3',
            },
            expectedResponse: {
                val: '1\n2\n3\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'java : print stdin',
            reqObject: {
                language: 'java',
                script:
                    'import java.util.Scanner;\n' +
                    'public class Solution {\n' +
                    '    public static void main(String[] args) {\n' +
                    '        System.out.println("hello world");\n' +
                    '    }\n' +
                    '}\n',
            },
            expectedResponse: {
                val: 'hello world\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'java : print stdin',
            reqObject: {
                language: 'java',
                script:
                    'import java.util.Scanner;\n' +
                    'public class Solution {\n' +
                    '    public static void main(String[] args) {\n' +
                    '        Scanner scanner = new Scanner(System.in);\n' +
                    '        while (scanner.hasNextInt()) {\n' +
                    '            int number = scanner.nextInt();\n' +
                    '            System.out.println(number);\n' +
                    '        } \n' +
                    '        scanner.close();\n' +
                    '    }\n' +
                    '}\n',
                stdin: '1 2 3',
            },
            expectedResponse: {
                val: '1\n2\n3\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'ruby : print hello world',
            reqObject: {
                language: 'ruby',
                script:
                    'print "hello world"'
            },
            expectedResponse: {
                val: 'hello world',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'ruby : print stdin',
            reqObject: {
                language: 'ruby',
                script:
                    'user_input = gets.chomp\n' +
                    'puts user_input',
                stdin: '10\n'
            },
            expectedResponse: {
                val: '10\n',
                status: 200,
                error: 0,
            },
        },
        {
            name: 'TLE test',
            reqObject: {
                language: 'nodejs',
                script: 'for(let i=0 ; ; ){i++}',
            },
            expectedResponse: {
                val: 'Time limit exceeded',
                status: 200,
                error: 1,
            },
        },
        {
            name: 'MLE test',
            reqObject: {
                language: 'python',
                script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
            },
            expectedResponse: {
                val: 'Memory limit exceeded',
                status: 200,
                error: 1,
            },
        },
        {
            name: 'MLE test 2',
            reqObject: {
                language: 'python',
                script:
                    'import time\n' +
                    'def consume_memory(target_mb, duration_sec):\n' +
                    '    float_size = 8\n' +
                    '    floats_per_mb = (1024 * 1024) // float_size\n' +
                    '    total_floats = target_mb * floats_per_mb\n' +
                    '    iterations = int(duration_sec / 0.1)\n' +
                    '    floats_per_iteration = total_floats // iterations\n' +
                    '    memory_hog = []\n' +
                    '    for _ in range(iterations):\n' +
                    '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                    '        time.sleep(0.1)\n' +
                    'consume_memory(1000, 1)\n',
            },
            expectedResponse: {
                val: 'Memory limit exceeded',
                status: 200,
                error: 1,
            },
        },
        {
            name: 'MLE test 3',
            reqObject: {
                language: 'python',
                script:
                    'a = [100]\n' +
                    'for i in a:\n' +
                    '    a.append(i)\n',
            },
            expectedResponse: {
                val: 'Memory limit exceeded',
                status: 200,
                error: 1,
            },
        },
        {
            name: 'OPEN AI test promptv1',
            reqObject: {
                language: 'promptv1',
                prompt: 'The question is what is 2 plus 2. The answer given is 4.',
            },
            expectedResponse: {
                val: {},
                status: 200,
                error: 0,
            },
        },
        {
            name: 'OPEN AI test promptv2',
            reqObject: {
                language: 'promptv2',
                prompt: 'The question is what is 2 plus 2. The answer given is 4.',
            },
            expectedResponse: {
                val: {},
                status: 200,
                error: 0,
            },
        },

        
    ]

    module.exports = { testCases }
