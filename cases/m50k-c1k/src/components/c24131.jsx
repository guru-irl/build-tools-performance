import React from 'react';
const LABEL_24131 = 'component_24131';
export function Component24131({ value = 24131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24131, 'data-value': derived.doubled }, children);
}
export default Component24131;
