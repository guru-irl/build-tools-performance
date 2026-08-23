import React from 'react';
const LABEL_36757 = 'component_36757';
export function Component36757({ value = 36757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36757, 'data-value': derived.doubled }, children);
}
export default Component36757;
