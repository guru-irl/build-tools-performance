import React from 'react';
const LABEL_7677 = 'component_7677';
export function Component7677({ value = 7677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7677, 'data-value': derived.doubled }, children);
}
export default Component7677;
