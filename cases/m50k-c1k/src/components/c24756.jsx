import React from 'react';
const LABEL_24756 = 'component_24756';
export function Component24756({ value = 24756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24756, 'data-value': derived.doubled }, children);
}
export default Component24756;
