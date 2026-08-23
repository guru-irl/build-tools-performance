import React from 'react';
const LABEL_20979 = 'component_20979';
export function Component20979({ value = 20979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20979, 'data-value': derived.doubled }, children);
}
export default Component20979;
