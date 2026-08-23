import React from 'react';
const LABEL_8560 = 'component_8560';
export function Component8560({ value = 8560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8560, 'data-value': derived.doubled }, children);
}
export default Component8560;
