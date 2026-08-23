import React from 'react';
const LABEL_38084 = 'component_38084';
export function Component38084({ value = 38084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38084, 'data-value': derived.doubled }, children);
}
export default Component38084;
