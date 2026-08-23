import React from 'react';
const LABEL_42811 = 'component_42811';
export function Component42811({ value = 42811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42811, 'data-value': derived.doubled }, children);
}
export default Component42811;
