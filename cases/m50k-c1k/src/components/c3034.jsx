import React from 'react';
const LABEL_3034 = 'component_3034';
export function Component3034({ value = 3034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3034, 'data-value': derived.doubled }, children);
}
export default Component3034;
