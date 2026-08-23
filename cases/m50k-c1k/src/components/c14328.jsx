import React from 'react';
const LABEL_14328 = 'component_14328';
export function Component14328({ value = 14328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14328, 'data-value': derived.doubled }, children);
}
export default Component14328;
