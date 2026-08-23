import React from 'react';
const LABEL_4503 = 'component_4503';
export function Component4503({ value = 4503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4503, 'data-value': derived.doubled }, children);
}
export default Component4503;
