import React from 'react';
const LABEL_8649 = 'component_8649';
export function Component8649({ value = 8649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8649, 'data-value': derived.doubled }, children);
}
export default Component8649;
