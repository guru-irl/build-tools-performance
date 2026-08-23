import React from 'react';
const LABEL_2108 = 'component_2108';
export function Component2108({ value = 2108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2108, 'data-value': derived.doubled }, children);
}
export default Component2108;
