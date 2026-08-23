import React from 'react';
const LABEL_8950 = 'component_8950';
export function Component8950({ value = 8950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8950, 'data-value': derived.doubled }, children);
}
export default Component8950;
