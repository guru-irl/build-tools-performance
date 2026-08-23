import React from 'react';
const LABEL_35916 = 'component_35916';
export function Component35916({ value = 35916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35916, 'data-value': derived.doubled }, children);
}
export default Component35916;
