import React from 'react';
const LABEL_15627 = 'component_15627';
export function Component15627({ value = 15627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15627, 'data-value': derived.doubled }, children);
}
export default Component15627;
