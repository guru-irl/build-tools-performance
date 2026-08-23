import React from 'react';
const LABEL_22977 = 'component_22977';
export function Component22977({ value = 22977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22977, 'data-value': derived.doubled }, children);
}
export default Component22977;
