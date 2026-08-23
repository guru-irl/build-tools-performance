import React from 'react';
const LABEL_46494 = 'component_46494';
export function Component46494({ value = 46494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46494, 'data-value': derived.doubled }, children);
}
export default Component46494;
