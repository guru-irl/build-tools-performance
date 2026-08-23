import React from 'react';
const LABEL_39047 = 'component_39047';
export function Component39047({ value = 39047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39047, 'data-value': derived.doubled }, children);
}
export default Component39047;
