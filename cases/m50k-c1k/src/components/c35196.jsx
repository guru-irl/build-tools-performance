import React from 'react';
const LABEL_35196 = 'component_35196';
export function Component35196({ value = 35196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35196, 'data-value': derived.doubled }, children);
}
export default Component35196;
