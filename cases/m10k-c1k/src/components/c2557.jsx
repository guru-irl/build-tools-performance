import React from 'react';
const LABEL_2557 = 'component_2557';
export function Component2557({ value = 2557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2557, 'data-value': derived.doubled }, children);
}
export default Component2557;
