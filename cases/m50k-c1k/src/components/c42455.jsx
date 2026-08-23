import React from 'react';
const LABEL_42455 = 'component_42455';
export function Component42455({ value = 42455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42455, 'data-value': derived.doubled }, children);
}
export default Component42455;
