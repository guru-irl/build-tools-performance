import React from 'react';
const LABEL_36087 = 'component_36087';
export function Component36087({ value = 36087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36087, 'data-value': derived.doubled }, children);
}
export default Component36087;
