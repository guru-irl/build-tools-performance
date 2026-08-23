import React from 'react';
const LABEL_35078 = 'component_35078';
export function Component35078({ value = 35078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35078, 'data-value': derived.doubled }, children);
}
export default Component35078;
