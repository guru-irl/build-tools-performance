import React from 'react';
const LABEL_40525 = 'component_40525';
export function Component40525({ value = 40525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40525, 'data-value': derived.doubled }, children);
}
export default Component40525;
