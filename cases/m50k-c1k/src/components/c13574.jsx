import React from 'react';
const LABEL_13574 = 'component_13574';
export function Component13574({ value = 13574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13574, 'data-value': derived.doubled }, children);
}
export default Component13574;
