import React from 'react';
const LABEL_2704 = 'component_2704';
export function Component2704({ value = 2704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2704, 'data-value': derived.doubled }, children);
}
export default Component2704;
