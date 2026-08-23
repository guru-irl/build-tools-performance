import React from 'react';
const LABEL_23950 = 'component_23950';
export function Component23950({ value = 23950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23950, 'data-value': derived.doubled }, children);
}
export default Component23950;
