import React from 'react';
const LABEL_18087 = 'component_18087';
export function Component18087({ value = 18087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18087, 'data-value': derived.doubled }, children);
}
export default Component18087;
