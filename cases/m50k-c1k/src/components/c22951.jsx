import React from 'react';
const LABEL_22951 = 'component_22951';
export function Component22951({ value = 22951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22951, 'data-value': derived.doubled }, children);
}
export default Component22951;
