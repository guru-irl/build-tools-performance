import React from 'react';
const LABEL_39044 = 'component_39044';
export function Component39044({ value = 39044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39044, 'data-value': derived.doubled }, children);
}
export default Component39044;
