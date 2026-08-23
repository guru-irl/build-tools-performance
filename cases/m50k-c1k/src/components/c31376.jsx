import React from 'react';
const LABEL_31376 = 'component_31376';
export function Component31376({ value = 31376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31376, 'data-value': derived.doubled }, children);
}
export default Component31376;
