import React from 'react';
const LABEL_23907 = 'component_23907';
export function Component23907({ value = 23907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23907, 'data-value': derived.doubled }, children);
}
export default Component23907;
