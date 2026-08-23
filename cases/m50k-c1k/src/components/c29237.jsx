import React from 'react';
const LABEL_29237 = 'component_29237';
export function Component29237({ value = 29237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29237, 'data-value': derived.doubled }, children);
}
export default Component29237;
