import React from 'react';
const LABEL_26040 = 'component_26040';
export function Component26040({ value = 26040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26040, 'data-value': derived.doubled }, children);
}
export default Component26040;
