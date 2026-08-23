import React from 'react';
const LABEL_8628 = 'component_8628';
export function Component8628({ value = 8628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8628, 'data-value': derived.doubled }, children);
}
export default Component8628;
