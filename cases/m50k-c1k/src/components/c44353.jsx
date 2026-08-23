import React from 'react';
const LABEL_44353 = 'component_44353';
export function Component44353({ value = 44353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44353, 'data-value': derived.doubled }, children);
}
export default Component44353;
