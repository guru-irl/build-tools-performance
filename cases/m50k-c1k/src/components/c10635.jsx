import React from 'react';
const LABEL_10635 = 'component_10635';
export function Component10635({ value = 10635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10635, 'data-value': derived.doubled }, children);
}
export default Component10635;
