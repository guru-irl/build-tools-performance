import React from 'react';
const LABEL_23026 = 'component_23026';
export function Component23026({ value = 23026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23026, 'data-value': derived.doubled }, children);
}
export default Component23026;
