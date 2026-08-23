import React from 'react';
const LABEL_28601 = 'component_28601';
export function Component28601({ value = 28601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28601, 'data-value': derived.doubled }, children);
}
export default Component28601;
