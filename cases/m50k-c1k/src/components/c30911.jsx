import React from 'react';
const LABEL_30911 = 'component_30911';
export function Component30911({ value = 30911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30911, 'data-value': derived.doubled }, children);
}
export default Component30911;
