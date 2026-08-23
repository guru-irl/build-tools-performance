import React from 'react';
const LABEL_12991 = 'component_12991';
export function Component12991({ value = 12991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12991, 'data-value': derived.doubled }, children);
}
export default Component12991;
