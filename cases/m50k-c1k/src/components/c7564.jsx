import React from 'react';
const LABEL_7564 = 'component_7564';
export function Component7564({ value = 7564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7564, 'data-value': derived.doubled }, children);
}
export default Component7564;
