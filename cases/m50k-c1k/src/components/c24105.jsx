import React from 'react';
const LABEL_24105 = 'component_24105';
export function Component24105({ value = 24105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24105, 'data-value': derived.doubled }, children);
}
export default Component24105;
