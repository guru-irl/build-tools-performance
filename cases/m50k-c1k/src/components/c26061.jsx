import React from 'react';
const LABEL_26061 = 'component_26061';
export function Component26061({ value = 26061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26061, 'data-value': derived.doubled }, children);
}
export default Component26061;
