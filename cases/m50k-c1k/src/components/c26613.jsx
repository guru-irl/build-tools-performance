import React from 'react';
const LABEL_26613 = 'component_26613';
export function Component26613({ value = 26613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26613, 'data-value': derived.doubled }, children);
}
export default Component26613;
