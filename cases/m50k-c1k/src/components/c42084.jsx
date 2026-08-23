import React from 'react';
const LABEL_42084 = 'component_42084';
export function Component42084({ value = 42084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42084, 'data-value': derived.doubled }, children);
}
export default Component42084;
