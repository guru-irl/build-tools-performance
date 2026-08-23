import React from 'react';
const LABEL_35950 = 'component_35950';
export function Component35950({ value = 35950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35950, 'data-value': derived.doubled }, children);
}
export default Component35950;
