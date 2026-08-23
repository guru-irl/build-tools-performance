import React from 'react';
const LABEL_2888 = 'component_2888';
export function Component2888({ value = 2888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2888, 'data-value': derived.doubled }, children);
}
export default Component2888;
