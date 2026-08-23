import React from 'react';
const LABEL_39098 = 'component_39098';
export function Component39098({ value = 39098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39098, 'data-value': derived.doubled }, children);
}
export default Component39098;
