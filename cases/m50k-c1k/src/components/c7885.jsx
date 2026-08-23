import React from 'react';
const LABEL_7885 = 'component_7885';
export function Component7885({ value = 7885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7885, 'data-value': derived.doubled }, children);
}
export default Component7885;
