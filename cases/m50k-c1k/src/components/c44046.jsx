import React from 'react';
const LABEL_44046 = 'component_44046';
export function Component44046({ value = 44046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44046, 'data-value': derived.doubled }, children);
}
export default Component44046;
