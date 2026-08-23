import React from 'react';
const LABEL_30084 = 'component_30084';
export function Component30084({ value = 30084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30084, 'data-value': derived.doubled }, children);
}
export default Component30084;
