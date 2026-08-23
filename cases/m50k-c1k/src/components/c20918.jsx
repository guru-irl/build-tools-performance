import React from 'react';
const LABEL_20918 = 'component_20918';
export function Component20918({ value = 20918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20918, 'data-value': derived.doubled }, children);
}
export default Component20918;
