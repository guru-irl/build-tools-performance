import React from 'react';
const LABEL_35460 = 'component_35460';
export function Component35460({ value = 35460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35460, 'data-value': derived.doubled }, children);
}
export default Component35460;
