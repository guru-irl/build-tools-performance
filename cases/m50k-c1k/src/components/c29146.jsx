import React from 'react';
const LABEL_29146 = 'component_29146';
export function Component29146({ value = 29146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29146, 'data-value': derived.doubled }, children);
}
export default Component29146;
