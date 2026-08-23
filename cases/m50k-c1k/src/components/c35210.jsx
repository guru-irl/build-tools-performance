import React from 'react';
const LABEL_35210 = 'component_35210';
export function Component35210({ value = 35210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35210, 'data-value': derived.doubled }, children);
}
export default Component35210;
