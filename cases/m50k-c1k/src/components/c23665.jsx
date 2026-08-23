import React from 'react';
const LABEL_23665 = 'component_23665';
export function Component23665({ value = 23665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23665, 'data-value': derived.doubled }, children);
}
export default Component23665;
