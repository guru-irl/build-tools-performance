import React from 'react';
const LABEL_44241 = 'component_44241';
export function Component44241({ value = 44241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44241, 'data-value': derived.doubled }, children);
}
export default Component44241;
