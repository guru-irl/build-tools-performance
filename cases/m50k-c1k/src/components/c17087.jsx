import React from 'react';
const LABEL_17087 = 'component_17087';
export function Component17087({ value = 17087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17087, 'data-value': derived.doubled }, children);
}
export default Component17087;
