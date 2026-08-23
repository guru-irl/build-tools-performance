import React from 'react';
const LABEL_4525 = 'component_4525';
export function Component4525({ value = 4525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4525, 'data-value': derived.doubled }, children);
}
export default Component4525;
