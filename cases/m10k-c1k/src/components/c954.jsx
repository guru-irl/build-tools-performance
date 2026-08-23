import React from 'react';
const LABEL_954 = 'component_954';
export function Component954({ value = 954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_954, 'data-value': derived.doubled }, children);
}
export default Component954;
