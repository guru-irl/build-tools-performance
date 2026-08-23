import React from 'react';
const LABEL_26303 = 'component_26303';
export function Component26303({ value = 26303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26303, 'data-value': derived.doubled }, children);
}
export default Component26303;
