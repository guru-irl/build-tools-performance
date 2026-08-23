import React from 'react';
const LABEL_6560 = 'component_6560';
export function Component6560({ value = 6560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6560, 'data-value': derived.doubled }, children);
}
export default Component6560;
