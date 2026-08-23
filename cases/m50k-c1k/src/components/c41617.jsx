import React from 'react';
const LABEL_41617 = 'component_41617';
export function Component41617({ value = 41617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41617, 'data-value': derived.doubled }, children);
}
export default Component41617;
