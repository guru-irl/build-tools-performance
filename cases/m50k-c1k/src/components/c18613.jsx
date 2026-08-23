import React from 'react';
const LABEL_18613 = 'component_18613';
export function Component18613({ value = 18613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18613, 'data-value': derived.doubled }, children);
}
export default Component18613;
