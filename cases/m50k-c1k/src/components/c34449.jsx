import React from 'react';
const LABEL_34449 = 'component_34449';
export function Component34449({ value = 34449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34449, 'data-value': derived.doubled }, children);
}
export default Component34449;
