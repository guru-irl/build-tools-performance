import React from 'react';
const LABEL_44665 = 'component_44665';
export function Component44665({ value = 44665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44665, 'data-value': derived.doubled }, children);
}
export default Component44665;
