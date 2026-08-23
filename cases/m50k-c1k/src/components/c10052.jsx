import React from 'react';
const LABEL_10052 = 'component_10052';
export function Component10052({ value = 10052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10052, 'data-value': derived.doubled }, children);
}
export default Component10052;
