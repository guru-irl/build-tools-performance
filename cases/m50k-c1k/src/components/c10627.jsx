import React from 'react';
const LABEL_10627 = 'component_10627';
export function Component10627({ value = 10627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10627, 'data-value': derived.doubled }, children);
}
export default Component10627;
