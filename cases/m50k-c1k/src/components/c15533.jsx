import React from 'react';
const LABEL_15533 = 'component_15533';
export function Component15533({ value = 15533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15533, 'data-value': derived.doubled }, children);
}
export default Component15533;
