import React from 'react';
const LABEL_37503 = 'component_37503';
export function Component37503({ value = 37503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37503, 'data-value': derived.doubled }, children);
}
export default Component37503;
