import React from 'react';
const LABEL_24064 = 'component_24064';
export function Component24064({ value = 24064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24064, 'data-value': derived.doubled }, children);
}
export default Component24064;
