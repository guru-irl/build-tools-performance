import React from 'react';
const LABEL_30565 = 'component_30565';
export function Component30565({ value = 30565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30565, 'data-value': derived.doubled }, children);
}
export default Component30565;
