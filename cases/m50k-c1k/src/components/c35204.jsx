import React from 'react';
const LABEL_35204 = 'component_35204';
export function Component35204({ value = 35204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35204, 'data-value': derived.doubled }, children);
}
export default Component35204;
