import React from 'react';
const LABEL_15654 = 'component_15654';
export function Component15654({ value = 15654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15654, 'data-value': derived.doubled }, children);
}
export default Component15654;
