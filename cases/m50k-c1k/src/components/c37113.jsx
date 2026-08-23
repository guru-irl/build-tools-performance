import React from 'react';
const LABEL_37113 = 'component_37113';
export function Component37113({ value = 37113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37113, 'data-value': derived.doubled }, children);
}
export default Component37113;
