import React from 'react';
const LABEL_37139 = 'component_37139';
export function Component37139({ value = 37139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37139, 'data-value': derived.doubled }, children);
}
export default Component37139;
