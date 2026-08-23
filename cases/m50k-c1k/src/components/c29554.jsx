import React from 'react';
const LABEL_29554 = 'component_29554';
export function Component29554({ value = 29554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29554, 'data-value': derived.doubled }, children);
}
export default Component29554;
