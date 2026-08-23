import React from 'react';
const LABEL_2408 = 'component_2408';
export function Component2408({ value = 2408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2408, 'data-value': derived.doubled }, children);
}
export default Component2408;
