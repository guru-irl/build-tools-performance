import React from 'react';
const LABEL_21166 = 'component_21166';
export function Component21166({ value = 21166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21166, 'data-value': derived.doubled }, children);
}
export default Component21166;
