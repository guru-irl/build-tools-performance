import React from 'react';
const LABEL_2816 = 'component_2816';
export function Component2816({ value = 2816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2816, 'data-value': derived.doubled }, children);
}
export default Component2816;
