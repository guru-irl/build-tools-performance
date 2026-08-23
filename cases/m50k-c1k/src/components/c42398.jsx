import React from 'react';
const LABEL_42398 = 'component_42398';
export function Component42398({ value = 42398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42398, 'data-value': derived.doubled }, children);
}
export default Component42398;
