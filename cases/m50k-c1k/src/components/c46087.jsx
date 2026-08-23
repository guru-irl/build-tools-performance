import React from 'react';
const LABEL_46087 = 'component_46087';
export function Component46087({ value = 46087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46087, 'data-value': derived.doubled }, children);
}
export default Component46087;
