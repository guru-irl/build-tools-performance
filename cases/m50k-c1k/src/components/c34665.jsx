import React from 'react';
const LABEL_34665 = 'component_34665';
export function Component34665({ value = 34665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34665, 'data-value': derived.doubled }, children);
}
export default Component34665;
