import React from 'react';
const LABEL_16611 = 'component_16611';
export function Component16611({ value = 16611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16611, 'data-value': derived.doubled }, children);
}
export default Component16611;
