import React from 'react';
const LABEL_35401 = 'component_35401';
export function Component35401({ value = 35401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35401, 'data-value': derived.doubled }, children);
}
export default Component35401;
