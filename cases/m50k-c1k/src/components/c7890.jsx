import React from 'react';
const LABEL_7890 = 'component_7890';
export function Component7890({ value = 7890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7890, 'data-value': derived.doubled }, children);
}
export default Component7890;
