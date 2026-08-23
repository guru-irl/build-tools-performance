import React from 'react';
const LABEL_2450 = 'component_2450';
export function Component2450({ value = 2450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2450, 'data-value': derived.doubled }, children);
}
export default Component2450;
