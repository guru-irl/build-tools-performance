import React from 'react';
const LABEL_35546 = 'component_35546';
export function Component35546({ value = 35546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35546, 'data-value': derived.doubled }, children);
}
export default Component35546;
