import React from 'react';
const LABEL_44061 = 'component_44061';
export function Component44061({ value = 44061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44061, 'data-value': derived.doubled }, children);
}
export default Component44061;
