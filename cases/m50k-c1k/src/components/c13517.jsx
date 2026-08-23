import React from 'react';
const LABEL_13517 = 'component_13517';
export function Component13517({ value = 13517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13517, 'data-value': derived.doubled }, children);
}
export default Component13517;
