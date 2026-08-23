import React from 'react';
const LABEL_45528 = 'component_45528';
export function Component45528({ value = 45528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45528, 'data-value': derived.doubled }, children);
}
export default Component45528;
