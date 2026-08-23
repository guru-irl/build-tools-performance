import React from 'react';
const LABEL_20131 = 'component_20131';
export function Component20131({ value = 20131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20131, 'data-value': derived.doubled }, children);
}
export default Component20131;
