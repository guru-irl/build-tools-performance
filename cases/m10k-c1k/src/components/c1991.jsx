import React from 'react';
const LABEL_1991 = 'component_1991';
export function Component1991({ value = 1991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1991, 'data-value': derived.doubled }, children);
}
export default Component1991;
