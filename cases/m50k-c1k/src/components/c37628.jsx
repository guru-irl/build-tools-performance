import React from 'react';
const LABEL_37628 = 'component_37628';
export function Component37628({ value = 37628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37628, 'data-value': derived.doubled }, children);
}
export default Component37628;
