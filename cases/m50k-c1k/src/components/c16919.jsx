import React from 'react';
const LABEL_16919 = 'component_16919';
export function Component16919({ value = 16919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16919, 'data-value': derived.doubled }, children);
}
export default Component16919;
