import React from 'react';
const LABEL_23045 = 'component_23045';
export function Component23045({ value = 23045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23045, 'data-value': derived.doubled }, children);
}
export default Component23045;
