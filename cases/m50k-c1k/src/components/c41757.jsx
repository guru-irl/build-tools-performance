import React from 'react';
const LABEL_41757 = 'component_41757';
export function Component41757({ value = 41757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41757, 'data-value': derived.doubled }, children);
}
export default Component41757;
