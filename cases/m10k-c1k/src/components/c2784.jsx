import React from 'react';
const LABEL_2784 = 'component_2784';
export function Component2784({ value = 2784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2784, 'data-value': derived.doubled }, children);
}
export default Component2784;
