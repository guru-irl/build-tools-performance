import React from 'react';
const LABEL_8087 = 'component_8087';
export function Component8087({ value = 8087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8087, 'data-value': derived.doubled }, children);
}
export default Component8087;
