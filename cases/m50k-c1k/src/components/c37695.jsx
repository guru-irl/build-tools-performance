import React from 'react';
const LABEL_37695 = 'component_37695';
export function Component37695({ value = 37695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37695, 'data-value': derived.doubled }, children);
}
export default Component37695;
