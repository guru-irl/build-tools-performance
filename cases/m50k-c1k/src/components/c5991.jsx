import React from 'react';
const LABEL_5991 = 'component_5991';
export function Component5991({ value = 5991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5991, 'data-value': derived.doubled }, children);
}
export default Component5991;
