import React from 'react';
const LABEL_3070 = 'component_3070';
export function Component3070({ value = 3070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3070, 'data-value': derived.doubled }, children);
}
export default Component3070;
