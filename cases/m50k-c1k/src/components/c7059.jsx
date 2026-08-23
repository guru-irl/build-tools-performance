import React from 'react';
const LABEL_7059 = 'component_7059';
export function Component7059({ value = 7059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7059, 'data-value': derived.doubled }, children);
}
export default Component7059;
