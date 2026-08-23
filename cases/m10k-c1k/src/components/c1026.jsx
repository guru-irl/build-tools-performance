import React from 'react';
const LABEL_1026 = 'component_1026';
export function Component1026({ value = 1026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1026, 'data-value': derived.doubled }, children);
}
export default Component1026;
