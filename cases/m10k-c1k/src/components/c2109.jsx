import React from 'react';
const LABEL_2109 = 'component_2109';
export function Component2109({ value = 2109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2109, 'data-value': derived.doubled }, children);
}
export default Component2109;
