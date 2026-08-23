import React from 'react';
const LABEL_15975 = 'component_15975';
export function Component15975({ value = 15975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15975, 'data-value': derived.doubled }, children);
}
export default Component15975;
