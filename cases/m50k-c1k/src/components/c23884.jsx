import React from 'react';
const LABEL_23884 = 'component_23884';
export function Component23884({ value = 23884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23884, 'data-value': derived.doubled }, children);
}
export default Component23884;
