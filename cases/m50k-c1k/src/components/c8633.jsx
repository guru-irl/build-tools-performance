import React from 'react';
const LABEL_8633 = 'component_8633';
export function Component8633({ value = 8633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8633, 'data-value': derived.doubled }, children);
}
export default Component8633;
