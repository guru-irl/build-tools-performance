import React from 'react';
const LABEL_11084 = 'component_11084';
export function Component11084({ value = 11084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11084, 'data-value': derived.doubled }, children);
}
export default Component11084;
