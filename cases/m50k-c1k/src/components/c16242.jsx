import React from 'react';
const LABEL_16242 = 'component_16242';
export function Component16242({ value = 16242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16242, 'data-value': derived.doubled }, children);
}
export default Component16242;
