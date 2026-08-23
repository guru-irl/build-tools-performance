import React from 'react';
const LABEL_16950 = 'component_16950';
export function Component16950({ value = 16950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16950, 'data-value': derived.doubled }, children);
}
export default Component16950;
