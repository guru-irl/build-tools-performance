import React from 'react';
const LABEL_2075 = 'component_2075';
export function Component2075({ value = 2075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2075, 'data-value': derived.doubled }, children);
}
export default Component2075;
