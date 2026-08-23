import React from 'react';
const LABEL_35657 = 'component_35657';
export function Component35657({ value = 35657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35657, 'data-value': derived.doubled }, children);
}
export default Component35657;
