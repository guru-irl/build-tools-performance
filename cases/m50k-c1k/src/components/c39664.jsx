import React from 'react';
const LABEL_39664 = 'component_39664';
export function Component39664({ value = 39664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39664, 'data-value': derived.doubled }, children);
}
export default Component39664;
