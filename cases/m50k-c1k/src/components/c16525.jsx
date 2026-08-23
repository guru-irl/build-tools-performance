import React from 'react';
const LABEL_16525 = 'component_16525';
export function Component16525({ value = 16525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16525, 'data-value': derived.doubled }, children);
}
export default Component16525;
