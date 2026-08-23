import React from 'react';
const LABEL_28811 = 'component_28811';
export function Component28811({ value = 28811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28811, 'data-value': derived.doubled }, children);
}
export default Component28811;
