import React from 'react';
const LABEL_27135 = 'component_27135';
export function Component27135({ value = 27135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27135, 'data-value': derived.doubled }, children);
}
export default Component27135;
