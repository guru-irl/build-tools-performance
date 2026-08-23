import React from 'react';
const LABEL_29027 = 'component_29027';
export function Component29027({ value = 29027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29027, 'data-value': derived.doubled }, children);
}
export default Component29027;
