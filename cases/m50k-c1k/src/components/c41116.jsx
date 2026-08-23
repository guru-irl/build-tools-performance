import React from 'react';
const LABEL_41116 = 'component_41116';
export function Component41116({ value = 41116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41116, 'data-value': derived.doubled }, children);
}
export default Component41116;
