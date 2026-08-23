import React from 'react';
const LABEL_2083 = 'component_2083';
export function Component2083({ value = 2083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2083, 'data-value': derived.doubled }, children);
}
export default Component2083;
