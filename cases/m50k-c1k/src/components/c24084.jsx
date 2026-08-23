import React from 'react';
const LABEL_24084 = 'component_24084';
export function Component24084({ value = 24084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24084, 'data-value': derived.doubled }, children);
}
export default Component24084;
