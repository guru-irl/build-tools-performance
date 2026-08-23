import React from 'react';
const LABEL_22574 = 'component_22574';
export function Component22574({ value = 22574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22574, 'data-value': derived.doubled }, children);
}
export default Component22574;
