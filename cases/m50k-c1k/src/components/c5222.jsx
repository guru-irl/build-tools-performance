import React from 'react';
const LABEL_5222 = 'component_5222';
export function Component5222({ value = 5222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5222, 'data-value': derived.doubled }, children);
}
export default Component5222;
