import React from 'react';
const LABEL_44246 = 'component_44246';
export function Component44246({ value = 44246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44246, 'data-value': derived.doubled }, children);
}
export default Component44246;
