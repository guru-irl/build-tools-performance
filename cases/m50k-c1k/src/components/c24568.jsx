import React from 'react';
const LABEL_24568 = 'component_24568';
export function Component24568({ value = 24568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24568, 'data-value': derived.doubled }, children);
}
export default Component24568;
