import React from 'react';
const LABEL_40715 = 'component_40715';
export function Component40715({ value = 40715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40715, 'data-value': derived.doubled }, children);
}
export default Component40715;
