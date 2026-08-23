import React from 'react';
const LABEL_7665 = 'component_7665';
export function Component7665({ value = 7665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7665, 'data-value': derived.doubled }, children);
}
export default Component7665;
