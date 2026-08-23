import React from 'react';
const LABEL_7206 = 'component_7206';
export function Component7206({ value = 7206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7206, 'data-value': derived.doubled }, children);
}
export default Component7206;
