import React from 'react';
const LABEL_36560 = 'component_36560';
export function Component36560({ value = 36560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36560, 'data-value': derived.doubled }, children);
}
export default Component36560;
