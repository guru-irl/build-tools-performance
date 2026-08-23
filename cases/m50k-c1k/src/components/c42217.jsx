import React from 'react';
const LABEL_42217 = 'component_42217';
export function Component42217({ value = 42217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42217, 'data-value': derived.doubled }, children);
}
export default Component42217;
