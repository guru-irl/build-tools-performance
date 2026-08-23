import React from 'react';
const LABEL_39164 = 'component_39164';
export function Component39164({ value = 39164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39164, 'data-value': derived.doubled }, children);
}
export default Component39164;
