import React from 'react';
const LABEL_6808 = 'component_6808';
export function Component6808({ value = 6808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6808, 'data-value': derived.doubled }, children);
}
export default Component6808;
