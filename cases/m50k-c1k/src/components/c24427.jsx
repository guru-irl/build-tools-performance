import React from 'react';
const LABEL_24427 = 'component_24427';
export function Component24427({ value = 24427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24427, 'data-value': derived.doubled }, children);
}
export default Component24427;
