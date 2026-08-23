import React from 'react';
const LABEL_32973 = 'component_32973';
export function Component32973({ value = 32973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32973, 'data-value': derived.doubled }, children);
}
export default Component32973;
