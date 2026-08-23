import React from 'react';
const LABEL_6830 = 'component_6830';
export function Component6830({ value = 6830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6830, 'data-value': derived.doubled }, children);
}
export default Component6830;
