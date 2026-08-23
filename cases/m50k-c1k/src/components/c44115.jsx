import React from 'react';
const LABEL_44115 = 'component_44115';
export function Component44115({ value = 44115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44115, 'data-value': derived.doubled }, children);
}
export default Component44115;
