import React from 'react';
const LABEL_16807 = 'component_16807';
export function Component16807({ value = 16807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16807, 'data-value': derived.doubled }, children);
}
export default Component16807;
