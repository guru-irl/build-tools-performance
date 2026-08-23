import React from 'react';
const LABEL_37808 = 'component_37808';
export function Component37808({ value = 37808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37808, 'data-value': derived.doubled }, children);
}
export default Component37808;
