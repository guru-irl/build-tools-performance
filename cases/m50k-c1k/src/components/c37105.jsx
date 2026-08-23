import React from 'react';
const LABEL_37105 = 'component_37105';
export function Component37105({ value = 37105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37105, 'data-value': derived.doubled }, children);
}
export default Component37105;
