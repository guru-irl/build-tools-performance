import React from 'react';
const LABEL_27351 = 'component_27351';
export function Component27351({ value = 27351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27351, 'data-value': derived.doubled }, children);
}
export default Component27351;
