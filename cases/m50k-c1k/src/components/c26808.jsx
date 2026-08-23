import React from 'react';
const LABEL_26808 = 'component_26808';
export function Component26808({ value = 26808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26808, 'data-value': derived.doubled }, children);
}
export default Component26808;
