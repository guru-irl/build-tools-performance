import React from 'react';
const LABEL_46126 = 'component_46126';
export function Component46126({ value = 46126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46126, 'data-value': derived.doubled }, children);
}
export default Component46126;
