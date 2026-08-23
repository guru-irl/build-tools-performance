import React from 'react';
const LABEL_38745 = 'component_38745';
export function Component38745({ value = 38745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38745, 'data-value': derived.doubled }, children);
}
export default Component38745;
