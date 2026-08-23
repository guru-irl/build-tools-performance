import React from 'react';
const LABEL_24947 = 'component_24947';
export function Component24947({ value = 24947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24947, 'data-value': derived.doubled }, children);
}
export default Component24947;
