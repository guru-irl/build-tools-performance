import React from 'react';
const LABEL_8808 = 'component_8808';
export function Component8808({ value = 8808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8808, 'data-value': derived.doubled }, children);
}
export default Component8808;
