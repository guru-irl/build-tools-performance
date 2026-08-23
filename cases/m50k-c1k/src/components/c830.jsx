import React from 'react';
const LABEL_830 = 'component_830';
export function Component830({ value = 830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_830, 'data-value': derived.doubled }, children);
}
export default Component830;
