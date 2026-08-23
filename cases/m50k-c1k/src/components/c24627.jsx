import React from 'react';
const LABEL_24627 = 'component_24627';
export function Component24627({ value = 24627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24627, 'data-value': derived.doubled }, children);
}
export default Component24627;
