import React from 'react';
const LABEL_6606 = 'component_6606';
export function Component6606({ value = 6606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6606, 'data-value': derived.doubled }, children);
}
export default Component6606;
