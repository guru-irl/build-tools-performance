import React from 'react';
const LABEL_37241 = 'component_37241';
export function Component37241({ value = 37241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37241, 'data-value': derived.doubled }, children);
}
export default Component37241;
