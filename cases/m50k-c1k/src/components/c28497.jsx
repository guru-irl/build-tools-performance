import React from 'react';
const LABEL_28497 = 'component_28497';
export function Component28497({ value = 28497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28497, 'data-value': derived.doubled }, children);
}
export default Component28497;
