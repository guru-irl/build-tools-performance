import React from 'react';
const LABEL_29328 = 'component_29328';
export function Component29328({ value = 29328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29328, 'data-value': derived.doubled }, children);
}
export default Component29328;
