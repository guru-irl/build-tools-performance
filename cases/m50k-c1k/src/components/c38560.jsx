import React from 'react';
const LABEL_38560 = 'component_38560';
export function Component38560({ value = 38560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38560, 'data-value': derived.doubled }, children);
}
export default Component38560;
