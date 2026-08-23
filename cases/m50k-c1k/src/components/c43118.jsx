import React from 'react';
const LABEL_43118 = 'component_43118';
export function Component43118({ value = 43118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43118, 'data-value': derived.doubled }, children);
}
export default Component43118;
