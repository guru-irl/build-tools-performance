import React from 'react';
const LABEL_11525 = 'component_11525';
export function Component11525({ value = 11525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11525, 'data-value': derived.doubled }, children);
}
export default Component11525;
