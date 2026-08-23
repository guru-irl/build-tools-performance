import React from 'react';
const LABEL_24079 = 'component_24079';
export function Component24079({ value = 24079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24079, 'data-value': derived.doubled }, children);
}
export default Component24079;
