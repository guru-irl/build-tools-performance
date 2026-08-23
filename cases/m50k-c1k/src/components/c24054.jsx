import React from 'react';
const LABEL_24054 = 'component_24054';
export function Component24054({ value = 24054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24054, 'data-value': derived.doubled }, children);
}
export default Component24054;
