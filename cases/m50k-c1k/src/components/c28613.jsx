import React from 'react';
const LABEL_28613 = 'component_28613';
export function Component28613({ value = 28613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28613, 'data-value': derived.doubled }, children);
}
export default Component28613;
