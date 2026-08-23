import React from 'react';
const LABEL_33204 = 'component_33204';
export function Component33204({ value = 33204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33204, 'data-value': derived.doubled }, children);
}
export default Component33204;
