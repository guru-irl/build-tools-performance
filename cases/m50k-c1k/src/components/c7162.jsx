import React from 'react';
const LABEL_7162 = 'component_7162';
export function Component7162({ value = 7162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7162, 'data-value': derived.doubled }, children);
}
export default Component7162;
