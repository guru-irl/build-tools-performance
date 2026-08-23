import React from 'react';
const LABEL_44137 = 'component_44137';
export function Component44137({ value = 44137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44137, 'data-value': derived.doubled }, children);
}
export default Component44137;
