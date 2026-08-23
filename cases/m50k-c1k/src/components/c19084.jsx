import React from 'react';
const LABEL_19084 = 'component_19084';
export function Component19084({ value = 19084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19084, 'data-value': derived.doubled }, children);
}
export default Component19084;
