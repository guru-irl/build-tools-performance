import React from 'react';
const LABEL_20003 = 'component_20003';
export function Component20003({ value = 20003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20003, 'data-value': derived.doubled }, children);
}
export default Component20003;
