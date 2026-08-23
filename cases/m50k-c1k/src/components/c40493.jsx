import React from 'react';
const LABEL_40493 = 'component_40493';
export function Component40493({ value = 40493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40493, 'data-value': derived.doubled }, children);
}
export default Component40493;
