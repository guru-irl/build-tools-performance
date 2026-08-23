import React from 'react';
const LABEL_38979 = 'component_38979';
export function Component38979({ value = 38979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38979, 'data-value': derived.doubled }, children);
}
export default Component38979;
