import React from 'react';
const LABEL_35132 = 'component_35132';
export function Component35132({ value = 35132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35132, 'data-value': derived.doubled }, children);
}
export default Component35132;
