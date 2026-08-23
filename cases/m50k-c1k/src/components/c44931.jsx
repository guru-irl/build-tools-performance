import React from 'react';
const LABEL_44931 = 'component_44931';
export function Component44931({ value = 44931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44931, 'data-value': derived.doubled }, children);
}
export default Component44931;
