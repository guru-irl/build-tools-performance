import React from 'react';
const LABEL_32560 = 'component_32560';
export function Component32560({ value = 32560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32560, 'data-value': derived.doubled }, children);
}
export default Component32560;
