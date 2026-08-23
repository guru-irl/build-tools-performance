import React from 'react';
const LABEL_26045 = 'component_26045';
export function Component26045({ value = 26045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26045, 'data-value': derived.doubled }, children);
}
export default Component26045;
