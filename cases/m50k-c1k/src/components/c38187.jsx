import React from 'react';
const LABEL_38187 = 'component_38187';
export function Component38187({ value = 38187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38187, 'data-value': derived.doubled }, children);
}
export default Component38187;
