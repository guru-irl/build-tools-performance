import React from 'react';
const LABEL_9294 = 'component_9294';
export function Component9294({ value = 9294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9294, 'data-value': derived.doubled }, children);
}
export default Component9294;
