import React from 'react';
const LABEL_15137 = 'component_15137';
export function Component15137({ value = 15137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15137, 'data-value': derived.doubled }, children);
}
export default Component15137;
