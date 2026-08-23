import React from 'react';
const LABEL_41284 = 'component_41284';
export function Component41284({ value = 41284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41284, 'data-value': derived.doubled }, children);
}
export default Component41284;
