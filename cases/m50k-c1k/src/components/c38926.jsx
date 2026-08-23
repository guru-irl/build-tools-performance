import React from 'react';
const LABEL_38926 = 'component_38926';
export function Component38926({ value = 38926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38926, 'data-value': derived.doubled }, children);
}
export default Component38926;
