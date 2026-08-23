import React from 'react';
const LABEL_15471 = 'component_15471';
export function Component15471({ value = 15471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15471, 'data-value': derived.doubled }, children);
}
export default Component15471;
