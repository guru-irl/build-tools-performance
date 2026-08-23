import React from 'react';
const LABEL_46629 = 'component_46629';
export function Component46629({ value = 46629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46629, 'data-value': derived.doubled }, children);
}
export default Component46629;
