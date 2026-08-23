import React from 'react';
const LABEL_35475 = 'component_35475';
export function Component35475({ value = 35475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35475, 'data-value': derived.doubled }, children);
}
export default Component35475;
