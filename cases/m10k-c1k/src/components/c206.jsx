import React from 'react';
const LABEL_206 = 'component_206';
export function Component206({ value = 206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_206, 'data-value': derived.doubled }, children);
}
export default Component206;
