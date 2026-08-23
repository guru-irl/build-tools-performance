import React from 'react';
const LABEL_46489 = 'component_46489';
export function Component46489({ value = 46489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46489, 'data-value': derived.doubled }, children);
}
export default Component46489;
