import React from 'react';
const LABEL_2355 = 'component_2355';
export function Component2355({ value = 2355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2355, 'data-value': derived.doubled }, children);
}
export default Component2355;
