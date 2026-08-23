import React from 'react';
const LABEL_2502 = 'component_2502';
export function Component2502({ value = 2502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2502, 'data-value': derived.doubled }, children);
}
export default Component2502;
