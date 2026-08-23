import React from 'react';
const LABEL_2575 = 'component_2575';
export function Component2575({ value = 2575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2575, 'data-value': derived.doubled }, children);
}
export default Component2575;
