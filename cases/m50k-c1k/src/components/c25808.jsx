import React from 'react';
const LABEL_25808 = 'component_25808';
export function Component25808({ value = 25808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25808, 'data-value': derived.doubled }, children);
}
export default Component25808;
