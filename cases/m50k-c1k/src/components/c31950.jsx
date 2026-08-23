import React from 'react';
const LABEL_31950 = 'component_31950';
export function Component31950({ value = 31950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31950, 'data-value': derived.doubled }, children);
}
export default Component31950;
