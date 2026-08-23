import React from 'react';
const LABEL_43751 = 'component_43751';
export function Component43751({ value = 43751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43751, 'data-value': derived.doubled }, children);
}
export default Component43751;
