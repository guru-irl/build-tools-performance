import React from 'react';
const LABEL_10608 = 'component_10608';
export function Component10608({ value = 10608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10608, 'data-value': derived.doubled }, children);
}
export default Component10608;
