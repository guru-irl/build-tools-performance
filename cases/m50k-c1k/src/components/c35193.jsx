import React from 'react';
const LABEL_35193 = 'component_35193';
export function Component35193({ value = 35193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35193, 'data-value': derived.doubled }, children);
}
export default Component35193;
