import React from 'react';
const LABEL_37884 = 'component_37884';
export function Component37884({ value = 37884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37884, 'data-value': derived.doubled }, children);
}
export default Component37884;
