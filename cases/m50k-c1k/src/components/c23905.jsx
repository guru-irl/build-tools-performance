import React from 'react';
const LABEL_23905 = 'component_23905';
export function Component23905({ value = 23905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23905, 'data-value': derived.doubled }, children);
}
export default Component23905;
