import React from 'react';
const LABEL_42830 = 'component_42830';
export function Component42830({ value = 42830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42830, 'data-value': derived.doubled }, children);
}
export default Component42830;
