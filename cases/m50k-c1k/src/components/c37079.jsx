import React from 'react';
const LABEL_37079 = 'component_37079';
export function Component37079({ value = 37079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37079, 'data-value': derived.doubled }, children);
}
export default Component37079;
