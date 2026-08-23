import React from 'react';
const LABEL_34582 = 'component_34582';
export function Component34582({ value = 34582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34582, 'data-value': derived.doubled }, children);
}
export default Component34582;
