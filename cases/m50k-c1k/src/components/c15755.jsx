import React from 'react';
const LABEL_15755 = 'component_15755';
export function Component15755({ value = 15755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15755, 'data-value': derived.doubled }, children);
}
export default Component15755;
