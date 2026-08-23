import React from 'react';
const LABEL_7583 = 'component_7583';
export function Component7583({ value = 7583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7583, 'data-value': derived.doubled }, children);
}
export default Component7583;
