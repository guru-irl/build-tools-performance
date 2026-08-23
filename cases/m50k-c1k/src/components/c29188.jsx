import React from 'react';
const LABEL_29188 = 'component_29188';
export function Component29188({ value = 29188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29188, 'data-value': derived.doubled }, children);
}
export default Component29188;
