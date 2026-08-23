import React from 'react';
const LABEL_35131 = 'component_35131';
export function Component35131({ value = 35131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35131, 'data-value': derived.doubled }, children);
}
export default Component35131;
