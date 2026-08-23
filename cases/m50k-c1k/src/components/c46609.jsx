import React from 'react';
const LABEL_46609 = 'component_46609';
export function Component46609({ value = 46609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46609, 'data-value': derived.doubled }, children);
}
export default Component46609;
