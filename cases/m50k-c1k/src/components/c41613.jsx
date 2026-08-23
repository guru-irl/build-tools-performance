import React from 'react';
const LABEL_41613 = 'component_41613';
export function Component41613({ value = 41613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41613, 'data-value': derived.doubled }, children);
}
export default Component41613;
