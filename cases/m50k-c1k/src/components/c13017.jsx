import React from 'react';
const LABEL_13017 = 'component_13017';
export function Component13017({ value = 13017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13017, 'data-value': derived.doubled }, children);
}
export default Component13017;
