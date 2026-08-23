import React from 'react';
const LABEL_6003 = 'component_6003';
export function Component6003({ value = 6003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6003, 'data-value': derived.doubled }, children);
}
export default Component6003;
