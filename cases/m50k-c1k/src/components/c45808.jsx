import React from 'react';
const LABEL_45808 = 'component_45808';
export function Component45808({ value = 45808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45808, 'data-value': derived.doubled }, children);
}
export default Component45808;
