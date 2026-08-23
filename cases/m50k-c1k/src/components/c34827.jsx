import React from 'react';
const LABEL_34827 = 'component_34827';
export function Component34827({ value = 34827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34827, 'data-value': derived.doubled }, children);
}
export default Component34827;
