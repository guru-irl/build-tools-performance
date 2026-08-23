import React from 'react';
const LABEL_7560 = 'component_7560';
export function Component7560({ value = 7560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7560, 'data-value': derived.doubled }, children);
}
export default Component7560;
