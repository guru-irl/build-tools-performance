import React from 'react';
const LABEL_11608 = 'component_11608';
export function Component11608({ value = 11608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11608, 'data-value': derived.doubled }, children);
}
export default Component11608;
