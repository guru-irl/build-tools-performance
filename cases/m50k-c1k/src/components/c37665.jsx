import React from 'react';
const LABEL_37665 = 'component_37665';
export function Component37665({ value = 37665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37665, 'data-value': derived.doubled }, children);
}
export default Component37665;
