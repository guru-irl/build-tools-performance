import React from 'react';
const LABEL_24657 = 'component_24657';
export function Component24657({ value = 24657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24657, 'data-value': derived.doubled }, children);
}
export default Component24657;
