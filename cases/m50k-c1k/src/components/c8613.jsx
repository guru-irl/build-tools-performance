import React from 'react';
const LABEL_8613 = 'component_8613';
export function Component8613({ value = 8613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8613, 'data-value': derived.doubled }, children);
}
export default Component8613;
