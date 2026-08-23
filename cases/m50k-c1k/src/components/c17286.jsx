import React from 'react';
const LABEL_17286 = 'component_17286';
export function Component17286({ value = 17286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17286, 'data-value': derived.doubled }, children);
}
export default Component17286;
