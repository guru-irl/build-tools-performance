import React from 'react';
const LABEL_43481 = 'component_43481';
export function Component43481({ value = 43481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43481, 'data-value': derived.doubled }, children);
}
export default Component43481;
