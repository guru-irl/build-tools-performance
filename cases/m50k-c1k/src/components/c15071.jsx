import React from 'react';
const LABEL_15071 = 'component_15071';
export function Component15071({ value = 15071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15071, 'data-value': derived.doubled }, children);
}
export default Component15071;
