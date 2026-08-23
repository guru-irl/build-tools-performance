import React from 'react';
const LABEL_2893 = 'component_2893';
export function Component2893({ value = 2893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2893, 'data-value': derived.doubled }, children);
}
export default Component2893;
