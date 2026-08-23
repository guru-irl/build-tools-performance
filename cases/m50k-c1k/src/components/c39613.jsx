import React from 'react';
const LABEL_39613 = 'component_39613';
export function Component39613({ value = 39613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39613, 'data-value': derived.doubled }, children);
}
export default Component39613;
