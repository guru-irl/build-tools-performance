import React from 'react';
const LABEL_2240 = 'component_2240';
export function Component2240({ value = 2240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2240, 'data-value': derived.doubled }, children);
}
export default Component2240;
