import React from 'react';
const LABEL_38583 = 'component_38583';
export function Component38583({ value = 38583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38583, 'data-value': derived.doubled }, children);
}
export default Component38583;
