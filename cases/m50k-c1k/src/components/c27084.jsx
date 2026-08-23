import React from 'react';
const LABEL_27084 = 'component_27084';
export function Component27084({ value = 27084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27084, 'data-value': derived.doubled }, children);
}
export default Component27084;
