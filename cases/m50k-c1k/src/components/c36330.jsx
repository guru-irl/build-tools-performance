import React from 'react';
const LABEL_36330 = 'component_36330';
export function Component36330({ value = 36330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36330, 'data-value': derived.doubled }, children);
}
export default Component36330;
