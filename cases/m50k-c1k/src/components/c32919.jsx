import React from 'react';
const LABEL_32919 = 'component_32919';
export function Component32919({ value = 32919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32919, 'data-value': derived.doubled }, children);
}
export default Component32919;
