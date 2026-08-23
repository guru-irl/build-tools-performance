import React from 'react';
const LABEL_10846 = 'component_10846';
export function Component10846({ value = 10846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10846, 'data-value': derived.doubled }, children);
}
export default Component10846;
