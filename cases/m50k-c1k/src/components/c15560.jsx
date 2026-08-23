import React from 'react';
const LABEL_15560 = 'component_15560';
export function Component15560({ value = 15560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15560, 'data-value': derived.doubled }, children);
}
export default Component15560;
