import React from 'react';
const LABEL_31560 = 'component_31560';
export function Component31560({ value = 31560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31560, 'data-value': derived.doubled }, children);
}
export default Component31560;
