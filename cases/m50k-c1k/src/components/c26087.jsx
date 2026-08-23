import React from 'react';
const LABEL_26087 = 'component_26087';
export function Component26087({ value = 26087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26087, 'data-value': derived.doubled }, children);
}
export default Component26087;
