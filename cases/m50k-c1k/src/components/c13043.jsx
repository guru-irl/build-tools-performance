import React from 'react';
const LABEL_13043 = 'component_13043';
export function Component13043({ value = 13043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13043, 'data-value': derived.doubled }, children);
}
export default Component13043;
