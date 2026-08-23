import React from 'react';
const LABEL_37599 = 'component_37599';
export function Component37599({ value = 37599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37599, 'data-value': derived.doubled }, children);
}
export default Component37599;
