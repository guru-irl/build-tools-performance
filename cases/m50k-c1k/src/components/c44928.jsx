import React from 'react';
const LABEL_44928 = 'component_44928';
export function Component44928({ value = 44928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44928, 'data-value': derived.doubled }, children);
}
export default Component44928;
