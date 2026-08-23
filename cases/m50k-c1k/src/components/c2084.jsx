import React from 'react';
const LABEL_2084 = 'component_2084';
export function Component2084({ value = 2084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2084, 'data-value': derived.doubled }, children);
}
export default Component2084;
