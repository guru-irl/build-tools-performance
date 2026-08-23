import React from 'react';
const LABEL_24504 = 'component_24504';
export function Component24504({ value = 24504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24504, 'data-value': derived.doubled }, children);
}
export default Component24504;
