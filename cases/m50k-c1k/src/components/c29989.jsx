import React from 'react';
const LABEL_29989 = 'component_29989';
export function Component29989({ value = 29989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29989, 'data-value': derived.doubled }, children);
}
export default Component29989;
