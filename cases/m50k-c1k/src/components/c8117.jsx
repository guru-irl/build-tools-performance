import React from 'react';
const LABEL_8117 = 'component_8117';
export function Component8117({ value = 8117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8117, 'data-value': derived.doubled }, children);
}
export default Component8117;
