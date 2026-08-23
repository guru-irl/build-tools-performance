import React from 'react';
const LABEL_21462 = 'component_21462';
export function Component21462({ value = 21462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21462, 'data-value': derived.doubled }, children);
}
export default Component21462;
