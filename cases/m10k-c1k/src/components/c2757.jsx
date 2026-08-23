import React from 'react';
const LABEL_2757 = 'component_2757';
export function Component2757({ value = 2757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2757, 'data-value': derived.doubled }, children);
}
export default Component2757;
