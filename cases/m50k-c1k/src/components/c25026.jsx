import React from 'react';
const LABEL_25026 = 'component_25026';
export function Component25026({ value = 25026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25026, 'data-value': derived.doubled }, children);
}
export default Component25026;
