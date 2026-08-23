import React from 'react';
const LABEL_23975 = 'component_23975';
export function Component23975({ value = 23975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23975, 'data-value': derived.doubled }, children);
}
export default Component23975;
