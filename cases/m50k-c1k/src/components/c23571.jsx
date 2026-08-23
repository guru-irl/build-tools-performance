import React from 'react';
const LABEL_23571 = 'component_23571';
export function Component23571({ value = 23571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23571, 'data-value': derived.doubled }, children);
}
export default Component23571;
