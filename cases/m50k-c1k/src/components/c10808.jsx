import React from 'react';
const LABEL_10808 = 'component_10808';
export function Component10808({ value = 10808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10808, 'data-value': derived.doubled }, children);
}
export default Component10808;
