import React from 'react';
const LABEL_30173 = 'component_30173';
export function Component30173({ value = 30173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30173, 'data-value': derived.doubled }, children);
}
export default Component30173;
