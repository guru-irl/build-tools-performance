import React from 'react';
const LABEL_560 = 'component_560';
export function Component560({ value = 560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_560, 'data-value': derived.doubled }, children);
}
export default Component560;
