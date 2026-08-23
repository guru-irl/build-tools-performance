import React from 'react';
const LABEL_40655 = 'component_40655';
export function Component40655({ value = 40655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40655, 'data-value': derived.doubled }, children);
}
export default Component40655;
