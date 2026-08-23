import React from 'react';
const LABEL_19237 = 'component_19237';
export function Component19237({ value = 19237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19237, 'data-value': derived.doubled }, children);
}
export default Component19237;
