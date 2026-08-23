import React from 'react';
const LABEL_24825 = 'component_24825';
export function Component24825({ value = 24825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24825, 'data-value': derived.doubled }, children);
}
export default Component24825;
