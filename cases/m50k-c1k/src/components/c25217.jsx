import React from 'react';
const LABEL_25217 = 'component_25217';
export function Component25217({ value = 25217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25217, 'data-value': derived.doubled }, children);
}
export default Component25217;
