import React from 'react';
const LABEL_21773 = 'component_21773';
export function Component21773({ value = 21773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21773, 'data-value': derived.doubled }, children);
}
export default Component21773;
