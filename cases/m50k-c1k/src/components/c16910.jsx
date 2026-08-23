import React from 'react';
const LABEL_16910 = 'component_16910';
export function Component16910({ value = 16910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16910, 'data-value': derived.doubled }, children);
}
export default Component16910;
