import React from 'react';
const LABEL_15206 = 'component_15206';
export function Component15206({ value = 15206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15206, 'data-value': derived.doubled }, children);
}
export default Component15206;
