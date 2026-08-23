import React from 'react';
const LABEL_35834 = 'component_35834';
export function Component35834({ value = 35834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35834, 'data-value': derived.doubled }, children);
}
export default Component35834;
