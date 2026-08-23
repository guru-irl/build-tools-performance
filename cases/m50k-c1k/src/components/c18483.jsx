import React from 'react';
const LABEL_18483 = 'component_18483';
export function Component18483({ value = 18483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18483, 'data-value': derived.doubled }, children);
}
export default Component18483;
