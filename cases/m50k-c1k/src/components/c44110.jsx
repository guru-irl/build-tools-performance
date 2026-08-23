import React from 'react';
const LABEL_44110 = 'component_44110';
export function Component44110({ value = 44110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44110, 'data-value': derived.doubled }, children);
}
export default Component44110;
