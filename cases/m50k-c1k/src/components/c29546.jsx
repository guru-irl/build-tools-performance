import React from 'react';
const LABEL_29546 = 'component_29546';
export function Component29546({ value = 29546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29546, 'data-value': derived.doubled }, children);
}
export default Component29546;
