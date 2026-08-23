import React from 'react';
const LABEL_15345 = 'component_15345';
export function Component15345({ value = 15345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15345, 'data-value': derived.doubled }, children);
}
export default Component15345;
