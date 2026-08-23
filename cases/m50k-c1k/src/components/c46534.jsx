import React from 'react';
const LABEL_46534 = 'component_46534';
export function Component46534({ value = 46534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46534, 'data-value': derived.doubled }, children);
}
export default Component46534;
