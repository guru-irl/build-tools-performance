import React from 'react';
const LABEL_37371 = 'component_37371';
export function Component37371({ value = 37371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37371, 'data-value': derived.doubled }, children);
}
export default Component37371;
