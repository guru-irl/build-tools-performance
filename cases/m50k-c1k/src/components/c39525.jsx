import React from 'react';
const LABEL_39525 = 'component_39525';
export function Component39525({ value = 39525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39525, 'data-value': derived.doubled }, children);
}
export default Component39525;
