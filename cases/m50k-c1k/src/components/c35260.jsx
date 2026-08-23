import React from 'react';
const LABEL_35260 = 'component_35260';
export function Component35260({ value = 35260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35260, 'data-value': derived.doubled }, children);
}
export default Component35260;
