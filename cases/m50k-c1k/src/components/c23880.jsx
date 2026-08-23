import React from 'react';
const LABEL_23880 = 'component_23880';
export function Component23880({ value = 23880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23880, 'data-value': derived.doubled }, children);
}
export default Component23880;
