import React from 'react';
const LABEL_11003 = 'component_11003';
export function Component11003({ value = 11003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11003, 'data-value': derived.doubled }, children);
}
export default Component11003;
