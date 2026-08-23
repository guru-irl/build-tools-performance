import React from 'react';
const LABEL_37137 = 'component_37137';
export function Component37137({ value = 37137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37137, 'data-value': derived.doubled }, children);
}
export default Component37137;
