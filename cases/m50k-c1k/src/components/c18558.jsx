import React from 'react';
const LABEL_18558 = 'component_18558';
export function Component18558({ value = 18558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18558, 'data-value': derived.doubled }, children);
}
export default Component18558;
