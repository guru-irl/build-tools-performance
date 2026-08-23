import React from 'react';
const LABEL_36890 = 'component_36890';
export function Component36890({ value = 36890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36890, 'data-value': derived.doubled }, children);
}
export default Component36890;
