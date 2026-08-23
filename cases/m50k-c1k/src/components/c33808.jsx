import React from 'react';
const LABEL_33808 = 'component_33808';
export function Component33808({ value = 33808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33808, 'data-value': derived.doubled }, children);
}
export default Component33808;
