import React from 'react';
const LABEL_33349 = 'component_33349';
export function Component33349({ value = 33349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33349, 'data-value': derived.doubled }, children);
}
export default Component33349;
