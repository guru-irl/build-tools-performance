import React from 'react';
const LABEL_27020 = 'component_27020';
export function Component27020({ value = 27020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27020, 'data-value': derived.doubled }, children);
}
export default Component27020;
