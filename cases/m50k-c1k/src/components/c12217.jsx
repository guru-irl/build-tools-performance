import React from 'react';
const LABEL_12217 = 'component_12217';
export function Component12217({ value = 12217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12217, 'data-value': derived.doubled }, children);
}
export default Component12217;
