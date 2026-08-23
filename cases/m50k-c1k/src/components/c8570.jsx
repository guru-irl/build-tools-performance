import React from 'react';
const LABEL_8570 = 'component_8570';
export function Component8570({ value = 8570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8570, 'data-value': derived.doubled }, children);
}
export default Component8570;
