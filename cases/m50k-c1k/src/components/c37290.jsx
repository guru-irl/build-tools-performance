import React from 'react';
const LABEL_37290 = 'component_37290';
export function Component37290({ value = 37290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37290, 'data-value': derived.doubled }, children);
}
export default Component37290;
