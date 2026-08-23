import React from 'react';
const LABEL_29733 = 'component_29733';
export function Component29733({ value = 29733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29733, 'data-value': derived.doubled }, children);
}
export default Component29733;
