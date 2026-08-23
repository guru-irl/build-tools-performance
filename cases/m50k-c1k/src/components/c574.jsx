import React from 'react';
const LABEL_574 = 'component_574';
export function Component574({ value = 574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_574, 'data-value': derived.doubled }, children);
}
export default Component574;
