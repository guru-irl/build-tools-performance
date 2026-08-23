import React from 'react';
const LABEL_39837 = 'component_39837';
export function Component39837({ value = 39837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39837, 'data-value': derived.doubled }, children);
}
export default Component39837;
