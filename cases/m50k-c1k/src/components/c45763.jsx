import React from 'react';
const LABEL_45763 = 'component_45763';
export function Component45763({ value = 45763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45763, 'data-value': derived.doubled }, children);
}
export default Component45763;
