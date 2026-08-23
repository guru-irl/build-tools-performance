import React from 'react';
const LABEL_35641 = 'component_35641';
export function Component35641({ value = 35641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35641, 'data-value': derived.doubled }, children);
}
export default Component35641;
