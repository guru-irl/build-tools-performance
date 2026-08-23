import React from 'react';
const LABEL_15749 = 'component_15749';
export function Component15749({ value = 15749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15749, 'data-value': derived.doubled }, children);
}
export default Component15749;
