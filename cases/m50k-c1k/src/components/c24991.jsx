import React from 'react';
const LABEL_24991 = 'component_24991';
export function Component24991({ value = 24991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24991, 'data-value': derived.doubled }, children);
}
export default Component24991;
