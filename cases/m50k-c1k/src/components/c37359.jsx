import React from 'react';
const LABEL_37359 = 'component_37359';
export function Component37359({ value = 37359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37359, 'data-value': derived.doubled }, children);
}
export default Component37359;
