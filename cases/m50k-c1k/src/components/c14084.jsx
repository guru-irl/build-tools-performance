import React from 'react';
const LABEL_14084 = 'component_14084';
export function Component14084({ value = 14084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14084, 'data-value': derived.doubled }, children);
}
export default Component14084;
