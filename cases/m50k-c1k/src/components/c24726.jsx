import React from 'react';
const LABEL_24726 = 'component_24726';
export function Component24726({ value = 24726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24726, 'data-value': derived.doubled }, children);
}
export default Component24726;
