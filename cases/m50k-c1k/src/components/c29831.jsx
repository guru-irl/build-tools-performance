import React from 'react';
const LABEL_29831 = 'component_29831';
export function Component29831({ value = 29831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29831, 'data-value': derived.doubled }, children);
}
export default Component29831;
