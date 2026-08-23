import React from 'react';
const LABEL_6455 = 'component_6455';
export function Component6455({ value = 6455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6455, 'data-value': derived.doubled }, children);
}
export default Component6455;
