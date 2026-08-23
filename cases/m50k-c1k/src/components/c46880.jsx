import React from 'react';
const LABEL_46880 = 'component_46880';
export function Component46880({ value = 46880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46880, 'data-value': derived.doubled }, children);
}
export default Component46880;
