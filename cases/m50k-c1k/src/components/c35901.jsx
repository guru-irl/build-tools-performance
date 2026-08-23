import React from 'react';
const LABEL_35901 = 'component_35901';
export function Component35901({ value = 35901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35901, 'data-value': derived.doubled }, children);
}
export default Component35901;
