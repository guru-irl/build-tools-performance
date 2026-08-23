import React from 'react';
const LABEL_15079 = 'component_15079';
export function Component15079({ value = 15079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15079, 'data-value': derived.doubled }, children);
}
export default Component15079;
