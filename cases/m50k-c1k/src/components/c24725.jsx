import React from 'react';
const LABEL_24725 = 'component_24725';
export function Component24725({ value = 24725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24725, 'data-value': derived.doubled }, children);
}
export default Component24725;
