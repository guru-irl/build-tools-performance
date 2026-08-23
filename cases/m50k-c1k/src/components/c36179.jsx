import React from 'react';
const LABEL_36179 = 'component_36179';
export function Component36179({ value = 36179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36179, 'data-value': derived.doubled }, children);
}
export default Component36179;
