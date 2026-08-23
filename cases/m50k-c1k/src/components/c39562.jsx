import React from 'react';
const LABEL_39562 = 'component_39562';
export function Component39562({ value = 39562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39562, 'data-value': derived.doubled }, children);
}
export default Component39562;
