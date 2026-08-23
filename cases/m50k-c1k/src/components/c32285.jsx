import React from 'react';
const LABEL_32285 = 'component_32285';
export function Component32285({ value = 32285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32285, 'data-value': derived.doubled }, children);
}
export default Component32285;
