import React from 'react';
const LABEL_4665 = 'component_4665';
export function Component4665({ value = 4665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4665, 'data-value': derived.doubled }, children);
}
export default Component4665;
