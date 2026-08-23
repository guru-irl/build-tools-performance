import React from 'react';
const LABEL_7808 = 'component_7808';
export function Component7808({ value = 7808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7808, 'data-value': derived.doubled }, children);
}
export default Component7808;
