import React from 'react';
const LABEL_24837 = 'component_24837';
export function Component24837({ value = 24837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24837, 'data-value': derived.doubled }, children);
}
export default Component24837;
