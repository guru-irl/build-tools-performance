import React from 'react';
const LABEL_35515 = 'component_35515';
export function Component35515({ value = 35515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35515, 'data-value': derived.doubled }, children);
}
export default Component35515;
