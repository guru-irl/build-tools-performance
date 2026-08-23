import React from 'react';
const LABEL_32000 = 'component_32000';
export function Component32000({ value = 32000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32000, 'data-value': derived.doubled }, children);
}
export default Component32000;
