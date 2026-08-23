import React from 'react';
const LABEL_41784 = 'component_41784';
export function Component41784({ value = 41784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41784, 'data-value': derived.doubled }, children);
}
export default Component41784;
