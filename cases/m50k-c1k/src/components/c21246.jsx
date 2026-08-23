import React from 'react';
const LABEL_21246 = 'component_21246';
export function Component21246({ value = 21246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21246, 'data-value': derived.doubled }, children);
}
export default Component21246;
