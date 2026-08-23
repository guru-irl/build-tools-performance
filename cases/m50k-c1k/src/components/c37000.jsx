import React from 'react';
const LABEL_37000 = 'component_37000';
export function Component37000({ value = 37000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37000, 'data-value': derived.doubled }, children);
}
export default Component37000;
