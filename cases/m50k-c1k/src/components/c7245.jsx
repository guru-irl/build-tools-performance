import React from 'react';
const LABEL_7245 = 'component_7245';
export function Component7245({ value = 7245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7245, 'data-value': derived.doubled }, children);
}
export default Component7245;
