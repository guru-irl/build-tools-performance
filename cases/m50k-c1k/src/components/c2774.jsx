import React from 'react';
const LABEL_2774 = 'component_2774';
export function Component2774({ value = 2774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2774, 'data-value': derived.doubled }, children);
}
export default Component2774;
