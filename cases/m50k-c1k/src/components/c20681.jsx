import React from 'react';
const LABEL_20681 = 'component_20681';
export function Component20681({ value = 20681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20681, 'data-value': derived.doubled }, children);
}
export default Component20681;
