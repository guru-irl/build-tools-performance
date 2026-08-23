import React from 'react';
const LABEL_35102 = 'component_35102';
export function Component35102({ value = 35102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35102, 'data-value': derived.doubled }, children);
}
export default Component35102;
