import React from 'react';
const LABEL_18279 = 'component_18279';
export function Component18279({ value = 18279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18279, 'data-value': derived.doubled }, children);
}
export default Component18279;
