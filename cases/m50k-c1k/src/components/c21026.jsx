import React from 'react';
const LABEL_21026 = 'component_21026';
export function Component21026({ value = 21026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21026, 'data-value': derived.doubled }, children);
}
export default Component21026;
