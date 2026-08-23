import React from 'react';
const LABEL_14808 = 'component_14808';
export function Component14808({ value = 14808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14808, 'data-value': derived.doubled }, children);
}
export default Component14808;
