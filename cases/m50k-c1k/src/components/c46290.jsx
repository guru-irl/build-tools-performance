import React from 'react';
const LABEL_46290 = 'component_46290';
export function Component46290({ value = 46290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46290, 'data-value': derived.doubled }, children);
}
export default Component46290;
