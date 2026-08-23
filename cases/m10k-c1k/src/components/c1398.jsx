import React from 'react';
const LABEL_1398 = 'component_1398';
export function Component1398({ value = 1398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1398, 'data-value': derived.doubled }, children);
}
export default Component1398;
