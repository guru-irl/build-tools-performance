import React from 'react';
const LABEL_33560 = 'component_33560';
export function Component33560({ value = 33560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33560, 'data-value': derived.doubled }, children);
}
export default Component33560;
