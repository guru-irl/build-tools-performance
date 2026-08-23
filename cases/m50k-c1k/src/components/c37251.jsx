import React from 'react';
const LABEL_37251 = 'component_37251';
export function Component37251({ value = 37251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37251, 'data-value': derived.doubled }, children);
}
export default Component37251;
