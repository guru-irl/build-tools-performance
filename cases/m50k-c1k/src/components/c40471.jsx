import React from 'react';
const LABEL_40471 = 'component_40471';
export function Component40471({ value = 40471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40471, 'data-value': derived.doubled }, children);
}
export default Component40471;
