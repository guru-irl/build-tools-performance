import React from 'react';
const LABEL_6950 = 'component_6950';
export function Component6950({ value = 6950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6950, 'data-value': derived.doubled }, children);
}
export default Component6950;
