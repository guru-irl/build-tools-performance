import React from 'react';
const LABEL_32053 = 'component_32053';
export function Component32053({ value = 32053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32053, 'data-value': derived.doubled }, children);
}
export default Component32053;
