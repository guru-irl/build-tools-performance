import React from 'react';
const LABEL_10560 = 'component_10560';
export function Component10560({ value = 10560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10560, 'data-value': derived.doubled }, children);
}
export default Component10560;
