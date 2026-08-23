import React from 'react';
const LABEL_15487 = 'component_15487';
export function Component15487({ value = 15487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15487, 'data-value': derived.doubled }, children);
}
export default Component15487;
