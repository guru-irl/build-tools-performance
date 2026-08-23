import React from 'react';
const LABEL_3061 = 'component_3061';
export function Component3061({ value = 3061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3061, 'data-value': derived.doubled }, children);
}
export default Component3061;
