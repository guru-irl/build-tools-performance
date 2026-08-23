import React from 'react';
const LABEL_18939 = 'component_18939';
export function Component18939({ value = 18939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18939, 'data-value': derived.doubled }, children);
}
export default Component18939;
