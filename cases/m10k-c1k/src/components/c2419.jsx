import React from 'react';
const LABEL_2419 = 'component_2419';
export function Component2419({ value = 2419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2419, 'data-value': derived.doubled }, children);
}
export default Component2419;
