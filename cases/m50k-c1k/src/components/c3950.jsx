import React from 'react';
const LABEL_3950 = 'component_3950';
export function Component3950({ value = 3950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3950, 'data-value': derived.doubled }, children);
}
export default Component3950;
