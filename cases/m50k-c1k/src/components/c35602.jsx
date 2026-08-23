import React from 'react';
const LABEL_35602 = 'component_35602';
export function Component35602({ value = 35602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35602, 'data-value': derived.doubled }, children);
}
export default Component35602;
