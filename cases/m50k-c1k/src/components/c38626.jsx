import React from 'react';
const LABEL_38626 = 'component_38626';
export function Component38626({ value = 38626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38626, 'data-value': derived.doubled }, children);
}
export default Component38626;
