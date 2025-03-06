import {configs} from "eslint-plugin-react-hooks";
import parser from "@typescript-eslint/parser";

export default [
    configs['recommended-latest'],
    {
        files: ["**/*.tsx"],
        languageOptions: {
            parser
        }
    }
];