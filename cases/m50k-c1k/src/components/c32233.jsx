import React from 'react';
const LABEL_32233 = 'component_32233';
export function Component32233({ value = 32233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32233, 'data-value': derived.doubled }, children);
}
export default Component32233;
