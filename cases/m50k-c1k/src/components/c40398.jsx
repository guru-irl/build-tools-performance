import React from 'react';
const LABEL_40398 = 'component_40398';
export function Component40398({ value = 40398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40398, 'data-value': derived.doubled }, children);
}
export default Component40398;
