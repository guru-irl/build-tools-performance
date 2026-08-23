import React from 'react';
const LABEL_34246 = 'component_34246';
export function Component34246({ value = 34246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34246, 'data-value': derived.doubled }, children);
}
export default Component34246;
