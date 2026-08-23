import React from 'react';
const LABEL_20846 = 'component_20846';
export function Component20846({ value = 20846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20846, 'data-value': derived.doubled }, children);
}
export default Component20846;
