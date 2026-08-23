import React from 'react';
const LABEL_4398 = 'component_4398';
export function Component4398({ value = 4398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4398, 'data-value': derived.doubled }, children);
}
export default Component4398;
