import React from 'react';
const LABEL_2832 = 'component_2832';
export function Component2832({ value = 2832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2832, 'data-value': derived.doubled }, children);
}
export default Component2832;
