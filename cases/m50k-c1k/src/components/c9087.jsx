import React from 'react';
const LABEL_9087 = 'component_9087';
export function Component9087({ value = 9087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9087, 'data-value': derived.doubled }, children);
}
export default Component9087;
