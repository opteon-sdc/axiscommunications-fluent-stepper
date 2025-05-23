import { Button } from "@fluentui/react-components";
import React, { useCallback, useEffect } from "react";
import { Stepper } from "./stepper";
import { useStepperDialogStyles } from "./stepper-dialog.styles";
import { StepperDialogProps } from "./stepper-dialog.types";

export const StepperDialog = ({
  currentStep,
  steps,
  vertical,
  disableProgression,
  onStepChange,
  onFinish,
  onCancel,
  cancelLabel,
  nextLabel,
  previousLabel,
  finishLabel,
  className,
}: StepperDialogProps) => {
  const {
    rootStyles,
    containerStyles,
    contentStyles,
    buttonContainerStyles,
    buttonStyles,
    buttonCancel,
    buttonPrevious,
    buttonNext,
    buttonFinish,
  } = useStepperDialogStyles({ vertical, className });

  const onNext = useCallback(
    () => {
		onStepChange(currentStep + 1);
	},
    [currentStep, onStepChange]
  );
  const onPrevious = useCallback(
    () => {
		onStepChange(currentStep - 1)
	},
    [currentStep, onStepChange]
  );


  useEffect(() => {
		var steps = document.getElementsByClassName('axis-Step')
		if (steps) {
			if (steps.length > 0 && steps[currentStep] !== undefined) {
				steps[currentStep].scrollIntoView();
			}
		}
  }, [currentStep])

  return (
    <div className={rootStyles}>
      <div className={containerStyles}>
        <div className="lungbeat-dialog-stepper-container" style={{ width: '100%', overflowX: 'auto'}}>
          <Stepper
            currentStep={currentStep}
            steps={steps}
            vertical={vertical}
          />
        </div>
        <div className={contentStyles}>{
			(steps[currentStep]?.content) && (steps[currentStep]?.content)
		}</div>
      </div>
      <div className={buttonContainerStyles}>
        <div className={buttonStyles}>
          {cancelLabel && onCancel && (
            <Button className={buttonCancel} onClick={onCancel}>
              {cancelLabel}
            </Button>
          )}
        </div>
        <div className={buttonStyles}>
          {currentStep > 0 && previousLabel && (
            <Button className={buttonPrevious} onClick={onPrevious}>
              {previousLabel}
            </Button>
          )}
          {currentStep !== steps.length - 1 && nextLabel && (
            <Button
              className={buttonNext}
              disabled={disableProgression}
              onClick={onNext}
              appearance="primary"
            >
              {nextLabel}
            </Button>
          )}
          {currentStep === steps.length - 1 && finishLabel && (
            <Button
              className={buttonFinish}
              onClick={onFinish}
              disabled={disableProgression}
              appearance="primary"
            >
              {finishLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
StepperDialog.displayName = "StepperDialog";
