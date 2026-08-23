import React from 'react';
const LABEL_35691 = 'component_35691';
export function Component35691({ value = 35691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35691, 'data-value': derived.doubled }, children);
}
export default Component35691;
