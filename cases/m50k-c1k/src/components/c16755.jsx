import React from 'react';
const LABEL_16755 = 'component_16755';
export function Component16755({ value = 16755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16755, 'data-value': derived.doubled }, children);
}
export default Component16755;
