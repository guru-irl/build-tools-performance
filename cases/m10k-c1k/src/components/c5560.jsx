import React from 'react';
const LABEL_5560 = 'component_5560';
export function Component5560({ value = 5560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5560, 'data-value': derived.doubled }, children);
}
export default Component5560;
