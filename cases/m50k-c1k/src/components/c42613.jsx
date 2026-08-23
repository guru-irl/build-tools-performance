import React from 'react';
const LABEL_42613 = 'component_42613';
export function Component42613({ value = 42613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42613, 'data-value': derived.doubled }, children);
}
export default Component42613;
