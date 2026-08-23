import React from 'react';
const LABEL_39290 = 'component_39290';
export function Component39290({ value = 39290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39290, 'data-value': derived.doubled }, children);
}
export default Component39290;
