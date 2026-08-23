import React from 'react';
const LABEL_37945 = 'component_37945';
export function Component37945({ value = 37945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37945, 'data-value': derived.doubled }, children);
}
export default Component37945;
