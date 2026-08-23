import React from 'react';
const LABEL_32597 = 'component_32597';
export function Component32597({ value = 32597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32597, 'data-value': derived.doubled }, children);
}
export default Component32597;
