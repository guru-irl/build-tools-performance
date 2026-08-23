import React from 'react';
const LABEL_18061 = 'component_18061';
export function Component18061({ value = 18061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18061, 'data-value': derived.doubled }, children);
}
export default Component18061;
