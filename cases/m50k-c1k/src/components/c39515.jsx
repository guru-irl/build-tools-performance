import React from 'react';
const LABEL_39515 = 'component_39515';
export function Component39515({ value = 39515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39515, 'data-value': derived.doubled }, children);
}
export default Component39515;
