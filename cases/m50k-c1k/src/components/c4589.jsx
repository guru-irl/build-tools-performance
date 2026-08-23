import React from 'react';
const LABEL_4589 = 'component_4589';
export function Component4589({ value = 4589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4589, 'data-value': derived.doubled }, children);
}
export default Component4589;
