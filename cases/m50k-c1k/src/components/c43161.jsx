import React from 'react';
const LABEL_43161 = 'component_43161';
export function Component43161({ value = 43161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43161, 'data-value': derived.doubled }, children);
}
export default Component43161;
