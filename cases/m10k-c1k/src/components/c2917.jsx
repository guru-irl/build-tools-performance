import React from 'react';
const LABEL_2917 = 'component_2917';
export function Component2917({ value = 2917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2917, 'data-value': derived.doubled }, children);
}
export default Component2917;
