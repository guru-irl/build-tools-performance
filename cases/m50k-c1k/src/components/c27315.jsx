import React from 'react';
const LABEL_27315 = 'component_27315';
export function Component27315({ value = 27315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27315, 'data-value': derived.doubled }, children);
}
export default Component27315;
