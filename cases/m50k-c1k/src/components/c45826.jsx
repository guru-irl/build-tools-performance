import React from 'react';
const LABEL_45826 = 'component_45826';
export function Component45826({ value = 45826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45826, 'data-value': derived.doubled }, children);
}
export default Component45826;
