import React from 'react';
const LABEL_2468 = 'component_2468';
export function Component2468({ value = 2468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2468, 'data-value': derived.doubled }, children);
}
export default Component2468;
