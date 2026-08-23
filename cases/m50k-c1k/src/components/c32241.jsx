import React from 'react';
const LABEL_32241 = 'component_32241';
export function Component32241({ value = 32241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32241, 'data-value': derived.doubled }, children);
}
export default Component32241;
