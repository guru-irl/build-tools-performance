import React from 'react';
const LABEL_32590 = 'component_32590';
export function Component32590({ value = 32590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32590, 'data-value': derived.doubled }, children);
}
export default Component32590;
