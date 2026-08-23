import React from 'react';
const LABEL_23301 = 'component_23301';
export function Component23301({ value = 23301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23301, 'data-value': derived.doubled }, children);
}
export default Component23301;
