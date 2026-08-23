import React from 'react';
const LABEL_37039 = 'component_37039';
export function Component37039({ value = 37039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37039, 'data-value': derived.doubled }, children);
}
export default Component37039;
