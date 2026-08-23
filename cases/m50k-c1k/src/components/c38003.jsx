import React from 'react';
const LABEL_38003 = 'component_38003';
export function Component38003({ value = 38003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38003, 'data-value': derived.doubled }, children);
}
export default Component38003;
