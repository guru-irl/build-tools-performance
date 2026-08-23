import React from 'react';
const LABEL_3588 = 'component_3588';
export function Component3588({ value = 3588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3588, 'data-value': derived.doubled }, children);
}
export default Component3588;
