import React from 'react';
const LABEL_4563 = 'component_4563';
export function Component4563({ value = 4563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4563, 'data-value': derived.doubled }, children);
}
export default Component4563;
