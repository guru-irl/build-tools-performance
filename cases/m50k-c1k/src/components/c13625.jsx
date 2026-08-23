import React from 'react';
const LABEL_13625 = 'component_13625';
export function Component13625({ value = 13625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13625, 'data-value': derived.doubled }, children);
}
export default Component13625;
