import React from 'react';
const LABEL_37898 = 'component_37898';
export function Component37898({ value = 37898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37898, 'data-value': derived.doubled }, children);
}
export default Component37898;
