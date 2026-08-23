import React from 'react';
const LABEL_35039 = 'component_35039';
export function Component35039({ value = 35039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35039, 'data-value': derived.doubled }, children);
}
export default Component35039;
