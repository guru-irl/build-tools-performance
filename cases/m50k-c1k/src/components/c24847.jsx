import React from 'react';
const LABEL_24847 = 'component_24847';
export function Component24847({ value = 24847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24847, 'data-value': derived.doubled }, children);
}
export default Component24847;
