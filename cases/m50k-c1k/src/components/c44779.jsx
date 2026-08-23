import React from 'react';
const LABEL_44779 = 'component_44779';
export function Component44779({ value = 44779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44779, 'data-value': derived.doubled }, children);
}
export default Component44779;
