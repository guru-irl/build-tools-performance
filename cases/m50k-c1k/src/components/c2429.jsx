import React from 'react';
const LABEL_2429 = 'component_2429';
export function Component2429({ value = 2429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2429, 'data-value': derived.doubled }, children);
}
export default Component2429;
