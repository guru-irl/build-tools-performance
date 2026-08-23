import React from 'react';
const LABEL_6290 = 'component_6290';
export function Component6290({ value = 6290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6290, 'data-value': derived.doubled }, children);
}
export default Component6290;
