import React from 'react';
const LABEL_5950 = 'component_5950';
export function Component5950({ value = 5950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5950, 'data-value': derived.doubled }, children);
}
export default Component5950;
