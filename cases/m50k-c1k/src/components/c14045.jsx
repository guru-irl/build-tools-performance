import React from 'react';
const LABEL_14045 = 'component_14045';
export function Component14045({ value = 14045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14045, 'data-value': derived.doubled }, children);
}
export default Component14045;
