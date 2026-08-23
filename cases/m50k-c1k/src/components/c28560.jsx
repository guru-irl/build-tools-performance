import React from 'react';
const LABEL_28560 = 'component_28560';
export function Component28560({ value = 28560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28560, 'data-value': derived.doubled }, children);
}
export default Component28560;
