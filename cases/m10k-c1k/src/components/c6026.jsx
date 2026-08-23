import React from 'react';
const LABEL_6026 = 'component_6026';
export function Component6026({ value = 6026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6026, 'data-value': derived.doubled }, children);
}
export default Component6026;
