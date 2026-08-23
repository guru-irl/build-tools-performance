import React from 'react';
const LABEL_44571 = 'component_44571';
export function Component44571({ value = 44571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44571, 'data-value': derived.doubled }, children);
}
export default Component44571;
