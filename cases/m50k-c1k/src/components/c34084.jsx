import React from 'react';
const LABEL_34084 = 'component_34084';
export function Component34084({ value = 34084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34084, 'data-value': derived.doubled }, children);
}
export default Component34084;
