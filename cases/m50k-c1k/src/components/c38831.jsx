import React from 'react';
const LABEL_38831 = 'component_38831';
export function Component38831({ value = 38831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38831, 'data-value': derived.doubled }, children);
}
export default Component38831;
