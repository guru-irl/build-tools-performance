import React from 'react';
const LABEL_31593 = 'component_31593';
export function Component31593({ value = 31593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31593, 'data-value': derived.doubled }, children);
}
export default Component31593;
