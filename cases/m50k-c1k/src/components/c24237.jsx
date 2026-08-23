import React from 'react';
const LABEL_24237 = 'component_24237';
export function Component24237({ value = 24237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24237, 'data-value': derived.doubled }, children);
}
export default Component24237;
