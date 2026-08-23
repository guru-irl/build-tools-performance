import React from 'react';
const LABEL_2456 = 'component_2456';
export function Component2456({ value = 2456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2456, 'data-value': derived.doubled }, children);
}
export default Component2456;
