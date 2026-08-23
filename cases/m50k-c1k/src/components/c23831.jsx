import React from 'react';
const LABEL_23831 = 'component_23831';
export function Component23831({ value = 23831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23831, 'data-value': derived.doubled }, children);
}
export default Component23831;
