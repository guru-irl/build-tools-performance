import React from 'react';
const LABEL_42960 = 'component_42960';
export function Component42960({ value = 42960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42960, 'data-value': derived.doubled }, children);
}
export default Component42960;
