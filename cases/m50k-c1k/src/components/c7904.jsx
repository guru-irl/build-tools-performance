import React from 'react';
const LABEL_7904 = 'component_7904';
export function Component7904({ value = 7904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7904, 'data-value': derived.doubled }, children);
}
export default Component7904;
