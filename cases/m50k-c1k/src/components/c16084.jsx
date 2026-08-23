import React from 'react';
const LABEL_16084 = 'component_16084';
export function Component16084({ value = 16084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16084, 'data-value': derived.doubled }, children);
}
export default Component16084;
