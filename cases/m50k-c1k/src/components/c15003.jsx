import React from 'react';
const LABEL_15003 = 'component_15003';
export function Component15003({ value = 15003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15003, 'data-value': derived.doubled }, children);
}
export default Component15003;
