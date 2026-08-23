import React from 'react';
const LABEL_2387 = 'component_2387';
export function Component2387({ value = 2387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2387, 'data-value': derived.doubled }, children);
}
export default Component2387;
