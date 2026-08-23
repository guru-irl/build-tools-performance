import React from 'react';
const LABEL_35079 = 'component_35079';
export function Component35079({ value = 35079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35079, 'data-value': derived.doubled }, children);
}
export default Component35079;
