import React from 'react';
const LABEL_42992 = 'component_42992';
export function Component42992({ value = 42992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42992, 'data-value': derived.doubled }, children);
}
export default Component42992;
