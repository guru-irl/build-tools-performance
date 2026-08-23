import React from 'react';
const LABEL_26084 = 'component_26084';
export function Component26084({ value = 26084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26084, 'data-value': derived.doubled }, children);
}
export default Component26084;
