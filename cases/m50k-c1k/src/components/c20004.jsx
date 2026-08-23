import React from 'react';
const LABEL_20004 = 'component_20004';
export function Component20004({ value = 20004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20004, 'data-value': derived.doubled }, children);
}
export default Component20004;
