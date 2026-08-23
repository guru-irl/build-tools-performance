import React from 'react';
const LABEL_6503 = 'component_6503';
export function Component6503({ value = 6503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6503, 'data-value': derived.doubled }, children);
}
export default Component6503;
