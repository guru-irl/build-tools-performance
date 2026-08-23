import React from 'react';
const LABEL_43861 = 'component_43861';
export function Component43861({ value = 43861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43861, 'data-value': derived.doubled }, children);
}
export default Component43861;
