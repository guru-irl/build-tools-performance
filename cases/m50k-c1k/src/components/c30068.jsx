import React from 'react';
const LABEL_30068 = 'component_30068';
export function Component30068({ value = 30068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30068, 'data-value': derived.doubled }, children);
}
export default Component30068;
