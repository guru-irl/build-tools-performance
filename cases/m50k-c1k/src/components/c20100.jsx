import React from 'react';
const LABEL_20100 = 'component_20100';
export function Component20100({ value = 20100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20100, 'data-value': derived.doubled }, children);
}
export default Component20100;
