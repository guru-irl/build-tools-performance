import React from 'react';
const LABEL_45345 = 'component_45345';
export function Component45345({ value = 45345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45345, 'data-value': derived.doubled }, children);
}
export default Component45345;
