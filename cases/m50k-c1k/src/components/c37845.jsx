import React from 'react';
const LABEL_37845 = 'component_37845';
export function Component37845({ value = 37845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37845, 'data-value': derived.doubled }, children);
}
export default Component37845;
