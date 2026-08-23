import React from 'react';
const LABEL_31695 = 'component_31695';
export function Component31695({ value = 31695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31695, 'data-value': derived.doubled }, children);
}
export default Component31695;
