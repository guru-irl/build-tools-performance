import React from 'react';
const LABEL_22835 = 'component_22835';
export function Component22835({ value = 22835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22835, 'data-value': derived.doubled }, children);
}
export default Component22835;
