import React from 'react';
const LABEL_28003 = 'component_28003';
export function Component28003({ value = 28003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28003, 'data-value': derived.doubled }, children);
}
export default Component28003;
