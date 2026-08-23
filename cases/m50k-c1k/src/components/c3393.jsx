import React from 'react';
const LABEL_3393 = 'component_3393';
export function Component3393({ value = 3393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3393, 'data-value': derived.doubled }, children);
}
export default Component3393;
