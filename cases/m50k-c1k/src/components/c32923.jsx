import React from 'react';
const LABEL_32923 = 'component_32923';
export function Component32923({ value = 32923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32923, 'data-value': derived.doubled }, children);
}
export default Component32923;
