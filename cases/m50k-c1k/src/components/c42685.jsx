import React from 'react';
const LABEL_42685 = 'component_42685';
export function Component42685({ value = 42685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42685, 'data-value': derived.doubled }, children);
}
export default Component42685;
