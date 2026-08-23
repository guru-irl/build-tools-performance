import React from 'react';
const LABEL_5681 = 'component_5681';
export function Component5681({ value = 5681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5681, 'data-value': derived.doubled }, children);
}
export default Component5681;
