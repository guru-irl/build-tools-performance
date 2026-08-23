import React from 'react';
const LABEL_29747 = 'component_29747';
export function Component29747({ value = 29747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29747, 'data-value': derived.doubled }, children);
}
export default Component29747;
