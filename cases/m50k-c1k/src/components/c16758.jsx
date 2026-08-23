import React from 'react';
const LABEL_16758 = 'component_16758';
export function Component16758({ value = 16758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16758, 'data-value': derived.doubled }, children);
}
export default Component16758;
