import React from 'react';
const LABEL_5087 = 'component_5087';
export function Component5087({ value = 5087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5087, 'data-value': derived.doubled }, children);
}
export default Component5087;
