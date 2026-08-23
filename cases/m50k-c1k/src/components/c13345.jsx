import React from 'react';
const LABEL_13345 = 'component_13345';
export function Component13345({ value = 13345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13345, 'data-value': derived.doubled }, children);
}
export default Component13345;
