import React from 'react';
const LABEL_2670 = 'component_2670';
export function Component2670({ value = 2670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2670, 'data-value': derived.doubled }, children);
}
export default Component2670;
