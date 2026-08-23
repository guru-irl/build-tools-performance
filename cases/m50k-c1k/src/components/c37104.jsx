import React from 'react';
const LABEL_37104 = 'component_37104';
export function Component37104({ value = 37104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37104, 'data-value': derived.doubled }, children);
}
export default Component37104;
