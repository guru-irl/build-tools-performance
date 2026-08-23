import React from 'react';
const LABEL_43967 = 'component_43967';
export function Component43967({ value = 43967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43967, 'data-value': derived.doubled }, children);
}
export default Component43967;
