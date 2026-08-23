import React from 'react';
const LABEL_18574 = 'component_18574';
export function Component18574({ value = 18574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18574, 'data-value': derived.doubled }, children);
}
export default Component18574;
