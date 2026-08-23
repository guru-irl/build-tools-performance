import React from 'react';
const LABEL_22760 = 'component_22760';
export function Component22760({ value = 22760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22760, 'data-value': derived.doubled }, children);
}
export default Component22760;
