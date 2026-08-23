import React from 'react';
const LABEL_10228 = 'component_10228';
export function Component10228({ value = 10228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10228, 'data-value': derived.doubled }, children);
}
export default Component10228;
