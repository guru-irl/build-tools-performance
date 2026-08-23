import React from 'react';
const LABEL_2849 = 'component_2849';
export function Component2849({ value = 2849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2849, 'data-value': derived.doubled }, children);
}
export default Component2849;
