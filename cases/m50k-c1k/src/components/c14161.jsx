import React from 'react';
const LABEL_14161 = 'component_14161';
export function Component14161({ value = 14161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14161, 'data-value': derived.doubled }, children);
}
export default Component14161;
