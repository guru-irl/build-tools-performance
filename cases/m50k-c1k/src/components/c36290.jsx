import React from 'react';
const LABEL_36290 = 'component_36290';
export function Component36290({ value = 36290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36290, 'data-value': derived.doubled }, children);
}
export default Component36290;
