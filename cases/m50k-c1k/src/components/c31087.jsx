import React from 'react';
const LABEL_31087 = 'component_31087';
export function Component31087({ value = 31087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31087, 'data-value': derived.doubled }, children);
}
export default Component31087;
