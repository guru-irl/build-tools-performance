import React from 'react';
const LABEL_2564 = 'component_2564';
export function Component2564({ value = 2564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2564, 'data-value': derived.doubled }, children);
}
export default Component2564;
