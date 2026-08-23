import React from 'react';
const LABEL_12295 = 'component_12295';
export function Component12295({ value = 12295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12295, 'data-value': derived.doubled }, children);
}
export default Component12295;
