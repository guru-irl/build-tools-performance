import React from 'react';
const LABEL_39898 = 'component_39898';
export function Component39898({ value = 39898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39898, 'data-value': derived.doubled }, children);
}
export default Component39898;
