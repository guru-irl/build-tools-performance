import React from 'react';
const LABEL_46039 = 'component_46039';
export function Component46039({ value = 46039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46039, 'data-value': derived.doubled }, children);
}
export default Component46039;
