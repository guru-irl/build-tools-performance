import React from 'react';
const LABEL_37574 = 'component_37574';
export function Component37574({ value = 37574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37574, 'data-value': derived.doubled }, children);
}
export default Component37574;
