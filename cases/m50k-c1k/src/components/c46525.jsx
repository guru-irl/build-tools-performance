import React from 'react';
const LABEL_46525 = 'component_46525';
export function Component46525({ value = 46525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46525, 'data-value': derived.doubled }, children);
}
export default Component46525;
