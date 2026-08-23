import React from 'react';
const LABEL_2528 = 'component_2528';
export function Component2528({ value = 2528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2528, 'data-value': derived.doubled }, children);
}
export default Component2528;
