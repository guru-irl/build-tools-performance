import React from 'react';
const LABEL_2088 = 'component_2088';
export function Component2088({ value = 2088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2088, 'data-value': derived.doubled }, children);
}
export default Component2088;
