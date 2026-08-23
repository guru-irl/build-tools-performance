import React from 'react';
const LABEL_11808 = 'component_11808';
export function Component11808({ value = 11808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11808, 'data-value': derived.doubled }, children);
}
export default Component11808;
