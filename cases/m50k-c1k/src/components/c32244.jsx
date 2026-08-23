import React from 'react';
const LABEL_32244 = 'component_32244';
export function Component32244({ value = 32244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32244, 'data-value': derived.doubled }, children);
}
export default Component32244;
