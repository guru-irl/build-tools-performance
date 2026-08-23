import React from 'react';
const LABEL_37403 = 'component_37403';
export function Component37403({ value = 37403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37403, 'data-value': derived.doubled }, children);
}
export default Component37403;
