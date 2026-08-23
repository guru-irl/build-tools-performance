import React from 'react';
const LABEL_35832 = 'component_35832';
export function Component35832({ value = 35832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35832, 'data-value': derived.doubled }, children);
}
export default Component35832;
