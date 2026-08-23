import React from 'react';
const LABEL_35068 = 'component_35068';
export function Component35068({ value = 35068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35068, 'data-value': derived.doubled }, children);
}
export default Component35068;
