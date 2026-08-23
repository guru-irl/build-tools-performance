import React from 'react';
const LABEL_43496 = 'component_43496';
export function Component43496({ value = 43496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43496, 'data-value': derived.doubled }, children);
}
export default Component43496;
