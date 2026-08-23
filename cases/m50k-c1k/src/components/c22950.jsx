import React from 'react';
const LABEL_22950 = 'component_22950';
export function Component22950({ value = 22950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22950, 'data-value': derived.doubled }, children);
}
export default Component22950;
