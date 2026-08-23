import React from 'react';
const LABEL_37622 = 'component_37622';
export function Component37622({ value = 37622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37622, 'data-value': derived.doubled }, children);
}
export default Component37622;
