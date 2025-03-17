export declare const StepperDialogClassNames: {
    root: string;
    container: string;
    content: string;
    buttonContainer: string;
    buttons: string;
    cancel: string;
    previous: string;
    next: string;
    finish: string;
};
type TUseStepperDialogStyles = {
    className?: string;
    vertical?: boolean;
};
export declare function useStepperDialogStyles({ vertical, className, }: TUseStepperDialogStyles): {
    styles: Record<"root" | "stepperContainer" | "stepperContainerVertical" | "stepContent" | "buttonContainer" | "buttons", string>;
    rootStyles: string;
    containerStyles: string;
    contentStyles: string;
    buttonContainerStyles: string;
    buttonStyles: string;
    buttonCancel: string;
    buttonPrevious: string;
    buttonNext: string;
    buttonFinish: string;
};
export {};
//# sourceMappingURL=stepper-dialog.styles.d.ts.map