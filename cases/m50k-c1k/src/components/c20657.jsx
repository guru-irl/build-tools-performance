import React from 'react';
const LABEL_20657 = 'component_20657';
export function Component20657({ value = 20657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20657, 'data-value': derived.doubled }, children);
}
export default Component20657;
