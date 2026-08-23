import React from 'react';
const LABEL_23646 = 'component_23646';
export function Component23646({ value = 23646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23646, 'data-value': derived.doubled }, children);
}
export default Component23646;
