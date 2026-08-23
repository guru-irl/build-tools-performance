import React from 'react';
const LABEL_2855 = 'component_2855';
export function Component2855({ value = 2855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2855, 'data-value': derived.doubled }, children);
}
export default Component2855;
