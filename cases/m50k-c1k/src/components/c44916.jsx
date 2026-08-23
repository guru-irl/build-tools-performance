import React from 'react';
const LABEL_44916 = 'component_44916';
export function Component44916({ value = 44916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44916, 'data-value': derived.doubled }, children);
}
export default Component44916;
