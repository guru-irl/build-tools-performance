import React from 'react';
const LABEL_45831 = 'component_45831';
export function Component45831({ value = 45831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45831, 'data-value': derived.doubled }, children);
}
export default Component45831;
