import React from 'react';
const LABEL_24636 = 'component_24636';
export function Component24636({ value = 24636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24636, 'data-value': derived.doubled }, children);
}
export default Component24636;
