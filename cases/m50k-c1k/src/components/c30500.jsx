import React from 'react';
const LABEL_30500 = 'component_30500';
export function Component30500({ value = 30500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30500, 'data-value': derived.doubled }, children);
}
export default Component30500;
