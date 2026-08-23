import React from 'react';
const LABEL_46170 = 'component_46170';
export function Component46170({ value = 46170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46170, 'data-value': derived.doubled }, children);
}
export default Component46170;
