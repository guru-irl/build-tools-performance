import React from 'react';
const LABEL_44372 = 'component_44372';
export function Component44372({ value = 44372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44372, 'data-value': derived.doubled }, children);
}
export default Component44372;
