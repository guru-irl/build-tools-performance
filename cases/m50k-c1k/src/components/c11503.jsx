import React from 'react';
const LABEL_11503 = 'component_11503';
export function Component11503({ value = 11503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11503, 'data-value': derived.doubled }, children);
}
export default Component11503;
