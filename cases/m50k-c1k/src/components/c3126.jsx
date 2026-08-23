import React from 'react';
const LABEL_3126 = 'component_3126';
export function Component3126({ value = 3126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3126, 'data-value': derived.doubled }, children);
}
export default Component3126;
