import React from 'react';
const LABEL_7950 = 'component_7950';
export function Component7950({ value = 7950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7950, 'data-value': derived.doubled }, children);
}
export default Component7950;
