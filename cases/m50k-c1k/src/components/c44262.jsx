import React from 'react';
const LABEL_44262 = 'component_44262';
export function Component44262({ value = 44262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44262, 'data-value': derived.doubled }, children);
}
export default Component44262;
