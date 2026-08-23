import React from 'react';
const LABEL_45515 = 'component_45515';
export function Component45515({ value = 45515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45515, 'data-value': derived.doubled }, children);
}
export default Component45515;
