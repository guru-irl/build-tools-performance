import React from 'react';
const LABEL_44812 = 'component_44812';
export function Component44812({ value = 44812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44812, 'data-value': derived.doubled }, children);
}
export default Component44812;
