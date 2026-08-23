import React from 'react';
const LABEL_35613 = 'component_35613';
export function Component35613({ value = 35613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35613, 'data-value': derived.doubled }, children);
}
export default Component35613;
