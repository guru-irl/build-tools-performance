import React from 'react';
const LABEL_37950 = 'component_37950';
export function Component37950({ value = 37950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37950, 'data-value': derived.doubled }, children);
}
export default Component37950;
