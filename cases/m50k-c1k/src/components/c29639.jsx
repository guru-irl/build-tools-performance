import React from 'react';
const LABEL_29639 = 'component_29639';
export function Component29639({ value = 29639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29639, 'data-value': derived.doubled }, children);
}
export default Component29639;
