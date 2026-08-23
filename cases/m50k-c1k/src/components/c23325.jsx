import React from 'react';
const LABEL_23325 = 'component_23325';
export function Component23325({ value = 23325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23325, 'data-value': derived.doubled }, children);
}
export default Component23325;
