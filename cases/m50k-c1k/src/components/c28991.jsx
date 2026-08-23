import React from 'react';
const LABEL_28991 = 'component_28991';
export function Component28991({ value = 28991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28991, 'data-value': derived.doubled }, children);
}
export default Component28991;
