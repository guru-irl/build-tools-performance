import React from 'react';
const LABEL_20330 = 'component_20330';
export function Component20330({ value = 20330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20330, 'data-value': derived.doubled }, children);
}
export default Component20330;
