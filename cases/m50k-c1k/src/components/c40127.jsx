import React from 'react';
const LABEL_40127 = 'component_40127';
export function Component40127({ value = 40127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40127, 'data-value': derived.doubled }, children);
}
export default Component40127;
