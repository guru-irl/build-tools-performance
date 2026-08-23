import React from 'react';
const LABEL_35655 = 'component_35655';
export function Component35655({ value = 35655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35655, 'data-value': derived.doubled }, children);
}
export default Component35655;
