import React from 'react';
const LABEL_42612 = 'component_42612';
export function Component42612({ value = 42612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42612, 'data-value': derived.doubled }, children);
}
export default Component42612;
