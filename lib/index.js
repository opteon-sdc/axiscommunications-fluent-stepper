// src/stepper.tsx
import { Divider, mergeClasses as mergeClasses3 } from "@fluentui/react-components";
import React6 from "react";

// src/step/render-step.tsx
import { getSlots as getSlots2 } from "@fluentui/react-utilities";
import React4 from "react";

// src/step-symbol/render-step-symbol.tsx
import { getSlots } from "@fluentui/react-utilities";
import React from "react";
var renderStepSymbol_unstable = (state) => {
  const { slots, slotProps } = getSlots(state);
  return /* @__PURE__ */ React.createElement(slots.root, { ...slotProps.root }, state.step < state.currentStep && /* @__PURE__ */ React.createElement(slots.icon, { ...slotProps.icon }), state.step >= state.currentStep && /* @__PURE__ */ React.createElement(React.Fragment, null, state.step + 1));
};

// src/step-symbol/step-symbol.tsx
import React3 from "react";

// src/step-symbol/use-step-symbol.ts
import { CheckmarkFilled } from "@fluentui/react-icons";
import {
  getNativeElementProps,
  resolveShorthand
} from "@fluentui/react-utilities";
import React2 from "react";
var useStepSymbol_unstable = (props, ref) => {
  const { step, currentStep } = props;
  const state = {
    step,
    currentStep,
    components: {
      root: "div",
      icon: "span"
    },
    root: getNativeElementProps("div", {
      ref,
      ...props
    }),
    icon: resolveShorthand(props.icon, {
      required: true,
      defaultProps: {
        children: React2.createElement(CheckmarkFilled)
      }
    })
  };
  return state;
};

// src/step-symbol/use-step-symbol-styles.ts
import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens
} from "@fluentui/react-components";
var stepSymbolClassNames = {
  root: "axis-StepSymbol",
  icon: "axis-StepSymbol__icon"
};
var useRootStyles = makeStyles({
  base: {
    display: "inline-flex",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    minWidth: "24px",
    height: "28px",
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightRegular
  },
  iconBase: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  previous: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorCompoundBrandBackground
    ),
    color: tokens.colorCompoundBrandBackground
  },
  current: {
    ...shorthands.border(
      tokens.strokeWidthThick,
      "solid",
      tokens.colorCompoundBrandBackground
    ),
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1
  },
  next: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    )
  }
});
var useStepSymbolStyles_unstable = (state) => {
  const rootStyles = useRootStyles();
  state.root.className = mergeClasses(
    stepSymbolClassNames.root,
    rootStyles.base,
    state.step < state.currentStep && rootStyles.previous,
    state.step === state.currentStep && rootStyles.current,
    state.step > state.currentStep && rootStyles.next
  );
  state.icon.className = mergeClasses(
    stepSymbolClassNames.icon,
    rootStyles.iconBase
  );
  return state;
};

// src/step-symbol/step-symbol.tsx
var StepSymbol = React3.forwardRef((props, ref) => {
  const state = useStepSymbol_unstable(props, ref);
  useStepSymbolStyles_unstable(state);
  return renderStepSymbol_unstable(state);
});
StepSymbol.displayName = "StepSymbol";

// src/step/render-step.tsx
var renderStep_unstable = (state) => {
  const { slots, slotProps } = getSlots2(state);
  return /* @__PURE__ */ React4.createElement(slots.root, { ...slotProps.root }, /* @__PURE__ */ React4.createElement(StepSymbol, { step: state.step, currentStep: state.currentStep }), state.name);
};

// src/step/step.tsx
import React5 from "react";

// src/step/use-step.ts
import { getNativeElementProps as getNativeElementProps2 } from "@fluentui/react-utilities";
var useStep_unstable = (props, ref) => {
  const { step, currentStep, name } = props;
  const state = {
    step,
    currentStep,
    name,
    components: {
      root: "div"
    },
    root: getNativeElementProps2("div", {
      ref,
      ...props
    })
  };
  return state;
};

// src/step/use-step-styles.ts
import {
  makeStyles as makeStyles2,
  mergeClasses as mergeClasses2,
  shorthands as shorthands2,
  tokens as tokens2
} from "@fluentui/react-components";
var stepClassNames = {
  root: "axis-Step"
};
var useRootStyles2 = makeStyles2({
  base: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    ...shorthands2.gap(tokens2.spacingHorizontalS),
    flexBasis: "fit-content",
    whiteSpace: "nowrap"
  },
  previousStep: {
    color: tokens2.colorNeutralForeground1
  },
  currentStep: {
    color: tokens2.colorNeutralForeground1,
    fontWeight: tokens2.fontWeightSemibold
  },
  nextStep: {
    color: tokens2.colorNeutralForeground2
  }
});
var useStepStyles_unstable = (state) => {
  const rootStyles = useRootStyles2();
  state.root.className = mergeClasses2(
    stepClassNames.root,
    rootStyles.base,
    state.step !== state.currentStep && state.step < state.currentStep && rootStyles.previousStep,
    state.step === state.currentStep && rootStyles.currentStep,
    state.step > state.currentStep && rootStyles.nextStep
  );
  return state;
};

// src/step/step.tsx
var Step = React5.forwardRef(
  (props, ref) => {
    const state = useStep_unstable(props, ref);
    useStepStyles_unstable(state);
    return renderStep_unstable(state);
  }
);
Step.displayName = "Step";

// src/stepper.styles.ts
import { makeStyles as makeStyles3, shorthands as shorthands3, tokens as tokens3 } from "@fluentui/react-components";
var useStepperStyles = makeStyles3({
  root: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    ...shorthands3.gap(tokens3.spacingHorizontalL)
  },
  rootVertical: {
    flexDirection: "column",
    alignContent: "left",
    alignItems: "left",
    ...shorthands3.gap(tokens3.spacingVerticalL)
  },
  divider: {
    flexGrow: 1
  },
  dividerVertical: {
    display: "inline-flex",
    width: "24px"
  }
});

// src/stepper.tsx
var stepperClassNames = {
  root: "axis-Stepper",
  divider: "axis-Stepper__divider"
};
var Stepper = ({ currentStep, steps, vertical }) => {
  const styles = useStepperStyles();
  const rootStyles = mergeClasses3(
    stepperClassNames.root,
    styles.root,
    vertical && styles.rootVertical
  );
  const dividerStyles = mergeClasses3(
    stepperClassNames.root,
    styles.divider,
    vertical && styles.dividerVertical
  );
  return /* @__PURE__ */ React6.createElement("div", { className: rootStyles }, steps.map((step, stepIndex) => /* @__PURE__ */ React6.createElement(React6.Fragment, { key: stepIndex }, /* @__PURE__ */ React6.createElement(Step, { currentStep, name: step.name, step: stepIndex }), stepIndex !== steps.length - 1 && /* @__PURE__ */ React6.createElement("div", { className: dividerStyles }, /* @__PURE__ */ React6.createElement(Divider, { vertical })))));
};
Stepper.displayName = "Stepper";

// src/stepper-dialog.tsx
import { Button } from "@fluentui/react-components";
import React7, { useCallback } from "react";

// src/stepper-dialog.styles.ts
import {
  makeStyles as makeStyles4,
  mergeClasses as mergeClasses4,
  shorthands as shorthands4,
  tokens as tokens4
} from "@fluentui/react-components";
var ROOT_CLASS_NAME = "axis-StepperDialog";
var StepperDialogClassNames = {
  root: ROOT_CLASS_NAME,
  container: `${ROOT_CLASS_NAME}-container`,
  content: `${ROOT_CLASS_NAME}-content`,
  buttonContainer: `${ROOT_CLASS_NAME}-buttons-container`,
  buttons: `${ROOT_CLASS_NAME}-buttons`,
  cancel: `${ROOT_CLASS_NAME}-cancel`,
  previous: `${ROOT_CLASS_NAME}-previous`,
  next: `${ROOT_CLASS_NAME}-next`,
  finish: `${ROOT_CLASS_NAME}-finish`
};
var useStyles = makeStyles4({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands4.gap(tokens4.spacingVerticalL),
    fontSize: tokens4.fontSizeBase300,
    fontWeight: tokens4.fontWeightRegular,
    height: "100%",
    justifyContent: "space-between",
    overflowY: "hidden"
  },
  stepperContainer: {
    display: "grid",
    overflowY: "hidden",
    ...shorthands4.gap(tokens4.spacingVerticalL)
  },
  stepperContainerVertical: {
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr 6fr",
    ...shorthands4.gap(tokens4.spacingHorizontalL)
  },
  stepContent: {
    display: "flex",
    overflowY: "hidden"
  },
  buttonContainer: {
    display: "flex",
    ...shorthands4.gap(tokens4.spacingHorizontalL),
    justifyContent: "space-between"
  },
  buttons: {
    display: "flex",
    ...shorthands4.gap(tokens4.spacingHorizontalL)
  }
});
function useStepperDialogStyles({
  vertical,
  className
}) {
  const styles = useStyles();
  const rootStyles = mergeClasses4(
    StepperDialogClassNames.root,
    styles.root,
    className
  );
  const containerStyles = mergeClasses4(
    StepperDialogClassNames.container,
    styles.stepperContainer,
    vertical && styles.stepperContainerVertical
  );
  const contentStyles = mergeClasses4(
    StepperDialogClassNames.content,
    styles.stepContent
  );
  const buttonContainerStyles = mergeClasses4(
    StepperDialogClassNames.buttonContainer,
    styles.buttonContainer
  );
  const buttonStyles = mergeClasses4(
    StepperDialogClassNames.buttons,
    styles.buttons
  );
  const buttonCancel = mergeClasses4(StepperDialogClassNames.cancel);
  const buttonPrevious = mergeClasses4(StepperDialogClassNames.previous);
  const buttonNext = mergeClasses4(StepperDialogClassNames.next);
  const buttonFinish = mergeClasses4(StepperDialogClassNames.finish);
  return {
    styles,
    rootStyles,
    containerStyles,
    contentStyles,
    buttonContainerStyles,
    buttonStyles,
    buttonCancel,
    buttonPrevious,
    buttonNext,
    buttonFinish
  };
}

// src/stepper-dialog.tsx
var StepperDialog = ({
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
  className
}) => {
  const {
    rootStyles,
    containerStyles,
    contentStyles,
    buttonContainerStyles,
    buttonStyles,
    buttonCancel,
    buttonPrevious,
    buttonNext,
    buttonFinish
  } = useStepperDialogStyles({ vertical, className });
  const onNext = useCallback(
    () => onStepChange(currentStep + 1),
    [currentStep, onStepChange]
  );
  const onPrevious = useCallback(
    () => onStepChange(currentStep - 1),
    [currentStep, onStepChange]
  );
  return /* @__PURE__ */ React7.createElement("div", { className: rootStyles }, /* @__PURE__ */ React7.createElement("div", { className: containerStyles }, /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement(
    Stepper,
    {
      currentStep,
      steps,
      vertical
    }
  )), /* @__PURE__ */ React7.createElement("div", { className: contentStyles }, steps[currentStep].content)), /* @__PURE__ */ React7.createElement("div", { className: buttonContainerStyles }, /* @__PURE__ */ React7.createElement("div", { className: buttonStyles }, cancelLabel && onCancel && /* @__PURE__ */ React7.createElement(Button, { className: buttonCancel, onClick: onCancel }, cancelLabel)), /* @__PURE__ */ React7.createElement("div", { className: buttonStyles }, currentStep > 0 && previousLabel && /* @__PURE__ */ React7.createElement(Button, { className: buttonPrevious, onClick: onPrevious }, previousLabel), currentStep !== steps.length - 1 && nextLabel && /* @__PURE__ */ React7.createElement(
    Button,
    {
      className: buttonNext,
      disabled: disableProgression,
      onClick: onNext,
      appearance: "primary"
    },
    nextLabel
  ), currentStep === steps.length - 1 && finishLabel && /* @__PURE__ */ React7.createElement(
    Button,
    {
      className: buttonFinish,
      onClick: onFinish,
      disabled: disableProgression,
      appearance: "primary"
    },
    finishLabel
  ))));
};
StepperDialog.displayName = "StepperDialog";
export {
  Stepper,
  StepperDialog,
  StepperDialogClassNames
};
//# sourceMappingURL=index.js.map
