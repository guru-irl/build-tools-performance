import React from 'react';
const LABEL_18596 = 'component_18596';
export function Component18596({ value = 18596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18596, 'data-value': derived.doubled }, children);
}
export default Component18596;
