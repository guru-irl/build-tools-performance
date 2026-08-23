import React from 'react';
const LABEL_10666 = 'component_10666';
export function Component10666({ value = 10666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10666, 'data-value': derived.doubled }, children);
}
export default Component10666;
