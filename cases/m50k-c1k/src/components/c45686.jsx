import React from 'react';
const LABEL_45686 = 'component_45686';
export function Component45686({ value = 45686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45686, 'data-value': derived.doubled }, children);
}
export default Component45686;
