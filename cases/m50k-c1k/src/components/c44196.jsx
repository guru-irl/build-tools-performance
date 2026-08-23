import React from 'react';
const LABEL_44196 = 'component_44196';
export function Component44196({ value = 44196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44196, 'data-value': derived.doubled }, children);
}
export default Component44196;
