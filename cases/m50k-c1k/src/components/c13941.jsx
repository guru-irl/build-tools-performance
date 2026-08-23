import React from 'react';
const LABEL_13941 = 'component_13941';
export function Component13941({ value = 13941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13941, 'data-value': derived.doubled }, children);
}
export default Component13941;
