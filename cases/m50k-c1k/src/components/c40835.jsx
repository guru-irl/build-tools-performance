import React from 'react';
const LABEL_40835 = 'component_40835';
export function Component40835({ value = 40835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40835, 'data-value': derived.doubled }, children);
}
export default Component40835;
