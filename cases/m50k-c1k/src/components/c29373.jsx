import React from 'react';
const LABEL_29373 = 'component_29373';
export function Component29373({ value = 29373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29373, 'data-value': derived.doubled }, children);
}
export default Component29373;
