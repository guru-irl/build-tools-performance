import React from 'react';
const LABEL_45813 = 'component_45813';
export function Component45813({ value = 45813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45813, 'data-value': derived.doubled }, children);
}
export default Component45813;
