import React from 'react';
const LABEL_2146 = 'component_2146';
export function Component2146({ value = 2146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2146, 'data-value': derived.doubled }, children);
}
export default Component2146;
