import React from 'react';
const LABEL_37171 = 'component_37171';
export function Component37171({ value = 37171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37171, 'data-value': derived.doubled }, children);
}
export default Component37171;
