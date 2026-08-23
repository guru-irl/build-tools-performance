import React from 'react';
const LABEL_29050 = 'component_29050';
export function Component29050({ value = 29050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29050, 'data-value': derived.doubled }, children);
}
export default Component29050;
