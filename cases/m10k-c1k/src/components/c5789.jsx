import React from 'react';
const LABEL_5789 = 'component_5789';
export function Component5789({ value = 5789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5789, 'data-value': derived.doubled }, children);
}
export default Component5789;
