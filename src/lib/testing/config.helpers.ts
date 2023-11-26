import { TestBed } from '@angular/core/testing';

type CompilerOptions = Partial<{
  providers: any[];
  useJit: boolean;
  preserveWhitespaces: boolean;
}>;
export type ConfigureFn = (testBed: typeof TestBed) => void;

export const configureTests = async (configure: ConfigureFn, compilerOptions: CompilerOptions = {}) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  };

  TestBed.configureTestingModule(compilerConfig); // Use setTestingModule instead of configureCompiler
  configure(TestBed);

  // Returning a Promise to allow asynchronous actions to complete before returning the TestBed
  await TestBed.compileComponents();
  return TestBed;
};
