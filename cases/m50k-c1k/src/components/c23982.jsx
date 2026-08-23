import React from 'react';
const LABEL_23982 = 'component_23982';
export function Component23982({ value = 23982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23982, 'data-value': derived.doubled }, children);
}
export default Component23982;
