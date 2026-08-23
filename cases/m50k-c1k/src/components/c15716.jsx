import React from 'react';
const LABEL_15716 = 'component_15716';
export function Component15716({ value = 15716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15716, 'data-value': derived.doubled }, children);
}
export default Component15716;
