import React from 'react';
const LABEL_19811 = 'component_19811';
export function Component19811({ value = 19811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19811, 'data-value': derived.doubled }, children);
}
export default Component19811;
