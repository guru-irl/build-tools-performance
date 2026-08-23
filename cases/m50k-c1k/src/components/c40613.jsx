import React from 'react';
const LABEL_40613 = 'component_40613';
export function Component40613({ value = 40613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40613, 'data-value': derived.doubled }, children);
}
export default Component40613;
