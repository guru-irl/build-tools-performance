import React from 'react';
const LABEL_24355 = 'component_24355';
export function Component24355({ value = 24355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24355, 'data-value': derived.doubled }, children);
}
export default Component24355;
