import React from 'react';
const LABEL_28334 = 'component_28334';
export function Component28334({ value = 28334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28334, 'data-value': derived.doubled }, children);
}
export default Component28334;
