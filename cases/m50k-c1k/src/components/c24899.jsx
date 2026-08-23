import React from 'react';
const LABEL_24899 = 'component_24899';
export function Component24899({ value = 24899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24899, 'data-value': derived.doubled }, children);
}
export default Component24899;
