import React from 'react';
const LABEL_37159 = 'component_37159';
export function Component37159({ value = 37159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37159, 'data-value': derived.doubled }, children);
}
export default Component37159;
