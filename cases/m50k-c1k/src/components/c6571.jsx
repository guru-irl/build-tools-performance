import React from 'react';
const LABEL_6571 = 'component_6571';
export function Component6571({ value = 6571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6571, 'data-value': derived.doubled }, children);
}
export default Component6571;
