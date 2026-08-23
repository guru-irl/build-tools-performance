import React from 'react';
const LABEL_24570 = 'component_24570';
export function Component24570({ value = 24570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24570, 'data-value': derived.doubled }, children);
}
export default Component24570;
