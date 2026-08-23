import React from 'react';
const LABEL_43718 = 'component_43718';
export function Component43718({ value = 43718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43718, 'data-value': derived.doubled }, children);
}
export default Component43718;
