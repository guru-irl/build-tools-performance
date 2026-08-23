import React from 'react';
const LABEL_45315 = 'component_45315';
export function Component45315({ value = 45315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45315, 'data-value': derived.doubled }, children);
}
export default Component45315;
