import React from 'react';
const LABEL_37293 = 'component_37293';
export function Component37293({ value = 37293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37293, 'data-value': derived.doubled }, children);
}
export default Component37293;
