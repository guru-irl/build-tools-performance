import React from 'react';
const LABEL_39754 = 'component_39754';
export function Component39754({ value = 39754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39754, 'data-value': derived.doubled }, children);
}
export default Component39754;
