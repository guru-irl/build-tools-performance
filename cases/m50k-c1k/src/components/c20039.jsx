import React from 'react';
const LABEL_20039 = 'component_20039';
export function Component20039({ value = 20039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20039, 'data-value': derived.doubled }, children);
}
export default Component20039;
