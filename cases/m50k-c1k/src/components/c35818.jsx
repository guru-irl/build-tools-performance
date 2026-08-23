import React from 'react';
const LABEL_35818 = 'component_35818';
export function Component35818({ value = 35818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35818, 'data-value': derived.doubled }, children);
}
export default Component35818;
