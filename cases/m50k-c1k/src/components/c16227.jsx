import React from 'react';
const LABEL_16227 = 'component_16227';
export function Component16227({ value = 16227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16227, 'data-value': derived.doubled }, children);
}
export default Component16227;
