import React from 'react';
const LABEL_24824 = 'component_24824';
export function Component24824({ value = 24824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24824, 'data-value': derived.doubled }, children);
}
export default Component24824;
