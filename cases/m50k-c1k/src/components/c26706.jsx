import React from 'react';
const LABEL_26706 = 'component_26706';
export function Component26706({ value = 26706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26706, 'data-value': derived.doubled }, children);
}
export default Component26706;
