import React from 'react';
const LABEL_22236 = 'component_22236';
export function Component22236({ value = 22236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22236, 'data-value': derived.doubled }, children);
}
export default Component22236;
