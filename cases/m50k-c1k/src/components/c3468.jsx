import React from 'react';
const LABEL_3468 = 'component_3468';
export function Component3468({ value = 3468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3468, 'data-value': derived.doubled }, children);
}
export default Component3468;
