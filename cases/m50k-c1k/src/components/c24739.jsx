import React from 'react';
const LABEL_24739 = 'component_24739';
export function Component24739({ value = 24739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24739, 'data-value': derived.doubled }, children);
}
export default Component24739;
