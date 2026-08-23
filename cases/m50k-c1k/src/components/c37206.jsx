import React from 'react';
const LABEL_37206 = 'component_37206';
export function Component37206({ value = 37206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37206, 'data-value': derived.doubled }, children);
}
export default Component37206;
