import React from 'react';
const LABEL_13880 = 'component_13880';
export function Component13880({ value = 13880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13880, 'data-value': derived.doubled }, children);
}
export default Component13880;
