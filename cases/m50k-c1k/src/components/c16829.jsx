import React from 'react';
const LABEL_16829 = 'component_16829';
export function Component16829({ value = 16829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16829, 'data-value': derived.doubled }, children);
}
export default Component16829;
