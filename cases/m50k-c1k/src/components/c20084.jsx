import React from 'react';
const LABEL_20084 = 'component_20084';
export function Component20084({ value = 20084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20084, 'data-value': derived.doubled }, children);
}
export default Component20084;
