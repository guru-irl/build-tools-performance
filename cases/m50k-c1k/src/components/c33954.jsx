import React from 'react';
const LABEL_33954 = 'component_33954';
export function Component33954({ value = 33954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33954, 'data-value': derived.doubled }, children);
}
export default Component33954;
