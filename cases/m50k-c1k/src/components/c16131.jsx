import React from 'react';
const LABEL_16131 = 'component_16131';
export function Component16131({ value = 16131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16131, 'data-value': derived.doubled }, children);
}
export default Component16131;
