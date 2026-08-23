import React from 'react';
const LABEL_18665 = 'component_18665';
export function Component18665({ value = 18665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18665, 'data-value': derived.doubled }, children);
}
export default Component18665;
