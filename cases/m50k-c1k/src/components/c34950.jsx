import React from 'react';
const LABEL_34950 = 'component_34950';
export function Component34950({ value = 34950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34950, 'data-value': derived.doubled }, children);
}
export default Component34950;
