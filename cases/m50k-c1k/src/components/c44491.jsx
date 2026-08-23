import React from 'react';
const LABEL_44491 = 'component_44491';
export function Component44491({ value = 44491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44491, 'data-value': derived.doubled }, children);
}
export default Component44491;
