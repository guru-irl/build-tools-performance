import React from 'react';
const LABEL_37629 = 'component_37629';
export function Component37629({ value = 37629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37629, 'data-value': derived.doubled }, children);
}
export default Component37629;
