import React from 'react';
const LABEL_16330 = 'component_16330';
export function Component16330({ value = 16330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16330, 'data-value': derived.doubled }, children);
}
export default Component16330;
