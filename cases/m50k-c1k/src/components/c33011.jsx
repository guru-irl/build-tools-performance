import React from 'react';
const LABEL_33011 = 'component_33011';
export function Component33011({ value = 33011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33011, 'data-value': derived.doubled }, children);
}
export default Component33011;
