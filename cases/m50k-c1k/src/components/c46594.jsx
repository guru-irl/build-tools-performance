import React from 'react';
const LABEL_46594 = 'component_46594';
export function Component46594({ value = 46594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46594, 'data-value': derived.doubled }, children);
}
export default Component46594;
