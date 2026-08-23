import React from 'react';
const LABEL_40026 = 'component_40026';
export function Component40026({ value = 40026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40026, 'data-value': derived.doubled }, children);
}
export default Component40026;
