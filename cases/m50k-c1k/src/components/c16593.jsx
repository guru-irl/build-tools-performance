import React from 'react';
const LABEL_16593 = 'component_16593';
export function Component16593({ value = 16593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16593, 'data-value': derived.doubled }, children);
}
export default Component16593;
