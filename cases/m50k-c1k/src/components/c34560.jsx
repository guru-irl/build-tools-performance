import React from 'react';
const LABEL_34560 = 'component_34560';
export function Component34560({ value = 34560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34560, 'data-value': derived.doubled }, children);
}
export default Component34560;
