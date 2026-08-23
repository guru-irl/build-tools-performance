import React from 'react';
const LABEL_24047 = 'component_24047';
export function Component24047({ value = 24047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24047, 'data-value': derived.doubled }, children);
}
export default Component24047;
