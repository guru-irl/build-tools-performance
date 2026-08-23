import React from 'react';
const LABEL_37134 = 'component_37134';
export function Component37134({ value = 37134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37134, 'data-value': derived.doubled }, children);
}
export default Component37134;
