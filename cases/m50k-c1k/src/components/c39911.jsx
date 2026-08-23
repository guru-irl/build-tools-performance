import React from 'react';
const LABEL_39911 = 'component_39911';
export function Component39911({ value = 39911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39911, 'data-value': derived.doubled }, children);
}
export default Component39911;
