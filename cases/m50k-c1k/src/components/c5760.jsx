import React from 'react';
const LABEL_5760 = 'component_5760';
export function Component5760({ value = 5760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5760, 'data-value': derived.doubled }, children);
}
export default Component5760;
