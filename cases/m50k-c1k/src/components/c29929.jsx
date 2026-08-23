import React from 'react';
const LABEL_29929 = 'component_29929';
export function Component29929({ value = 29929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29929, 'data-value': derived.doubled }, children);
}
export default Component29929;
