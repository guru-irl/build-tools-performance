import React from 'react';
const LABEL_41811 = 'component_41811';
export function Component41811({ value = 41811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41811, 'data-value': derived.doubled }, children);
}
export default Component41811;
