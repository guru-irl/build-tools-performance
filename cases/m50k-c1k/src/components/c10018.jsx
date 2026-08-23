import React from 'react';
const LABEL_10018 = 'component_10018';
export function Component10018({ value = 10018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10018, 'data-value': derived.doubled }, children);
}
export default Component10018;
