import React from 'react';
const LABEL_19162 = 'component_19162';
export function Component19162({ value = 19162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19162, 'data-value': derived.doubled }, children);
}
export default Component19162;
