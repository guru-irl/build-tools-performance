import React from 'react';
const LABEL_42328 = 'component_42328';
export function Component42328({ value = 42328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42328, 'data-value': derived.doubled }, children);
}
export default Component42328;
