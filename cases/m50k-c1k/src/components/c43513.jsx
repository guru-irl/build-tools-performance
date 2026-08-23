import React from 'react';
const LABEL_43513 = 'component_43513';
export function Component43513({ value = 43513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43513, 'data-value': derived.doubled }, children);
}
export default Component43513;
