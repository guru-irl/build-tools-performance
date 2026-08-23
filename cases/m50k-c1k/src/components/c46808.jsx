import React from 'react';
const LABEL_46808 = 'component_46808';
export function Component46808({ value = 46808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46808, 'data-value': derived.doubled }, children);
}
export default Component46808;
