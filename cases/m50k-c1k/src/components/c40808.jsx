import React from 'react';
const LABEL_40808 = 'component_40808';
export function Component40808({ value = 40808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40808, 'data-value': derived.doubled }, children);
}
export default Component40808;
